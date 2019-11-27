module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['yarn lint', 'git add'],
  '**/*': ['yarn format', 'git add'],
};
