const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 50000;
      config.baseUrl = 'https://gamma.compass.com';
      //设置运行窗口分辨率大小
      config.viewportWidth = 1280;
      config.viewportHeight= 720;
      //启用 cy.session
      config.experimentalSessionAndOrigin = true;

      //存储失败截图
      config.screenshotOnRunFailure = false;
      config.screenshotsFolder = "cypress/screenshots";
      //存储录屏
      config.video = false;
      config.videosFolder = "cypress/videos";
      config.videosCompression = 32;

      return config;

    },
  },
});
