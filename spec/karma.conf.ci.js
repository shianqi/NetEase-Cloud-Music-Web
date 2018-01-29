// Karma configuration
// Generated on Wed Aug 30 2017 09:45:21 GMT+0800 (中国标准时间)
const karmaConfig = require('./karma.conf.common.js')

module.exports = function (config) {
  // Example set of browsers to run on Sauce Labs
  // Check out https://saucelabs.com/platforms for all browser/platform combos

  config.set(
    Object.assign(
      {},
      karmaConfig,
      {
        browserStack: {
          username: 'shianqi1',
          accessKey: 'j38b44rwz7nHXMZo5kJi',
          retryLimit: 5,
          captureTimeout: 1800,
          timeout: 1800,
          concurrency: 2,
          browserNoActivityTimeout: 1800,
          browserDisconnectTimeout: 1800,
          browserDisconnectTolerance: 3,
          pollingTimeout: 30000,
        },

        // define browsers
        customLaunchers: {
          bs_chrome_mac: {
            base: 'BrowserStack',
            browser: 'chrome',
            browser_version: '55.0',
            os: 'OS X',
            os_version: 'Sierra',
          },
          bs_firefix_mac: {
            base: 'BrowserStack',
            os: 'OS X',
            os_version: 'Sierra',
            browser: 'firefox',
            browser_version: '50.0',
          },
          bs_ie9_windows: {
            base: 'BrowserStack',
            browser: 'ie',
            browser_version: '9.0',
            os: 'Windows',
            os_version: '7',
          },
        },

        browsers: [
          'bs_chrome_mac',
          'bs_firefix_mac',
        ],

        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,
      }
    )
  )
}
