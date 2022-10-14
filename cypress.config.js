const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.defaultCommandTimeout = 20000;
      config.baseUrl = 'https://gamma.compass.com';
      // 设置运行窗口分辨率大小
      config.viewportHeight = 720;
      config.viewportWidth = 1280;
      //启用cy.cypress
      config.experimentalSessionAndOrigin = true;

      //启用截图
      config.screenshotOnRunFailure = false;
      config.screenshotsFolder = 'cypress/screenshot';
      //启用录屏
      config.video = false;
      config.videosFolder = 'cypress/screenvideo';
      config.videoCompression = 32;

      return config
    }
  },
  pageLoadTimeout: 200000
});
