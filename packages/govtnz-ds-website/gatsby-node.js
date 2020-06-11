// DEV NOTE: See ./prebuild/prebuild.js too

exports.onCreateWebpackConfig = ({
  // Via https://gist.github.com/arnars/2bb1d81fc0955d57fe88a8348695f594
  stage,
  getConfig,
  actions: { replaceWebpackConfig },
}) => {
  switch (stage) {
    case 'build-javascript':
      // We want to include the babel polyfills before any application code,
      // so we're inserting it as an additional entry point.  Gatsby does not allow
      // this in "setWebpackConfig", so we have to use "replaceWebpackConfig"
      const config = getConfig();

      const app =
        typeof config.entry.app === 'string'
          ? [config.entry.app]
          : config.entry.app;

      const miniCssExtractPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      );

      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true;
      }

      config.entry.app = ['@babel/polyfill', ...app];
      replaceWebpackConfig(config);
  }
};
