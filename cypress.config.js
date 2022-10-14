const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.defaultCommandTimeout = 10000;
      config.baseUrl = 'https://gamma.compass.com/';
      config.viewportWidth = 1280;
      config.viewportHeight = 720;
      //启用 cy.session
      config.experimentalSessionAndOrigin = true;

      //screen shot
      //config.screenshotOnRunFailure = false;
      config.screenshotOnRunFailure = true;
      config.screenshotsFolder = 'cypress/screenshots';


      //video
      config.video = false;
      //config.video = true;
      config.videosFolder = 'cypress/videos';  //目录地址
      config.videoCompression = 32; //压缩比例


      return config;
    },
  },
});
