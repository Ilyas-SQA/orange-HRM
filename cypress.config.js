
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'odyq5n',
  e2e: {

    viewportWidth: 1000,
    viewportHeight: 960,

    baseUrl: 'https://magento2-demo.magebit.com'

  },

  setupNodeEvents(on, config) {
    // we can grab some process environment variables
    // and stick it into config.env before returning the updated config
    config.env = config.env || {}

    // you could extract only specific variables
    // and rename them if necessary
    config.env.ADMIN_USEREMAIL = process.env.ADMIN_USEREMAIL
    config.env.ADMIN_PASS = process.env.ADMIN_PASS

    return config
  },

});