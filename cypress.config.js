const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
      config.defaultCommandTimeout = 10000;
      config.baseUrl = 'https://gamma.compass.com';
      //设置窗口运行分辨率大小
      config.viewportWidth = 1280;
      config.viewportHeight = 720;
      //启用cy.session
      config.experimentalSessionAndOrigin=true;
      //截图
      config.screenshotOnRunFailure =  false;
      config.screenshotsFolder = 'cypress/screenshots';
      //录屏
      config.video = false;
      config.videosFolder = 'cypress/videos';
      config.videoCompression = 32;

      return config;
    },
  },
  //接口时间
  //pageLoadTimeout: 1200000
});
