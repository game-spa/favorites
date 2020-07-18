const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "game-spa",
    projectName: "favorites",
    webpackConfigEnv,
  });

  return webpackMerge.smart(defaultConfig, {
    devServer: {
      port: 8083,
    },
  });
};
