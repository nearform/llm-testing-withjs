const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      openai_api_key: "Your API Key"
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
