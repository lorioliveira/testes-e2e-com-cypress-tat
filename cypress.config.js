const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  projectId: '1v3u84',
  e2e: {
    baseUrl: 'https://www.ticketmaster.com.br/event/jonasbrothers',
    // baseUrl:'https://notes-serverless-app.com',
    env: {
      viewportWidthBreakpoint: 768,
    },
    defaultCommandTimeout: 30000,
    requestTimeout: 20000
  },
  setupNodeEvents(on, config) {
    require('@cypress/grep/src/plugin')(config)
    return config
  },
})
