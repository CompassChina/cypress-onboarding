const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000;
      config.baseUrl = "http://gamma.compass.com";
      // 设置运行窗口分辨率大小
      config.viewportWidth = 1280;
      config.viewportHeight = 720;

      // 启用 cy.session
      config.experimentalSessionAndOrigin = true;

      // 失败截图，并设置存储路径
      config.screenshotOnRunFailure = false;
      config.screenshotsFolder = "cypress/screenshots";

      // 录屏，并设置存储路径
      config.video = false;
      config.videosFolder = "cypress/videos";
      config.videosCompression = 32;

      return config;
    },
  },
});
