const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     
      config.defaultCommandTimeout = 6000000;
      config.baseUrl = 'http://gamma.compass.com';

      config.viewportHeight = 900;
      config.viewportWidth = 1440;
      config.experimentalSessionAndOrigin = true;

      //截图
      config.screenshotOnRunFailure = false;
      
      //录屏
      config.video = false;
      config.videoCompression = 15;
      return config;
    },
  },
  pageLoadTimeout:200000
});
