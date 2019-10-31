/* eslint-disable no-console */
const path = require('path');
const fse = require('fs-extra');

const packagePath = process.cwd();
const buildPath = path.join(packagePath, './dist');

async function includeFileInBuild(file) {
  const sourcePath = path.resolve(packagePath, file);
  const targetPath = path.resolve(buildPath, path.basename(file));
  const exists = await fse.exists(sourcePath);

  if (!exists) {
    console.log(`Skipped ${sourcePath}`);
    return;
  }

  await fse.copy(sourcePath, targetPath);
  console.log(`Copied ${sourcePath} to ${targetPath}`);
}

async function createPackageFile() {
  const packageData = await fse.readFile(
    path.resolve(packagePath, './package.json'),
    'utf8'
  );

  const {
    nyc,
    scripts,
    devDependencies,
    workspaces,
    files,
    ...packageDataOther
  } = JSON.parse(packageData);

  const newPackageData = {
    ...packageDataOther,
    private: false,
    main: './cjs/index.js',
    module: './index.js',
    typings: './index.d.ts',
    author: 'Straw Hat Team <opensource@straw-hat-llc.com>',
    bugs: 'https://github.com/straw-hat-team/javascript/issues',
    license: 'MIT',
    publishConfig: {
      access: 'public',
    },
  };

  const targetPath = path.resolve(buildPath, './package.json');

  await fse.writeFile(
    targetPath,
    JSON.stringify(newPackageData, null, 2),
    'utf8'
  );
  console.log(`Created package.json in ${targetPath}`);

  return newPackageData;
}

async function prepend(file, string) {
  const data = await fse.readFile(file, 'utf8');
  await fse.writeFile(file, string + data, 'utf8');
}

async function copySupportFiles() {
  await Promise.all(
    ['./README.md', './CHANGELOG.md', '../../LICENSE'].map((file) =>
      includeFileInBuild(file)
    )
  );
}
async function run() {
  try {
    await createPackageFile();
    await copySupportFiles();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
