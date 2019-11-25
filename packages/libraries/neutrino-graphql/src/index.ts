export function neutrinoGraphql(config: any) {
  config.module
    .rule('graphql')
    .test(/\.(graphql|gql)$/)
    .use('graphql-tag')
    .loader('graphql-tag/loader')
    .options({
      exclude: /node_modules/,
    });
}
