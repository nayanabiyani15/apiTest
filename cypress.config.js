const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://gorest.co.in/public/v2/",
    "token" : "2c54feab6f365f092e92d0e22c1515e746186837fe14713a367562497b0bcfbe",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
