// Karma configuration
// Generated on Wed Aug 30 2017 09:45:21 GMT+0800 (中国标准时间)
const karmaConfig = require('./karma.conf.common.js')

module.exports = function(config) {
    config.set(
        Object.assign(
            {},
            karmaConfig,
            {
                customLaunchers: {
                    bs_chrome_mac: {
                        base: 'BrowserStack',
                        browser: 'chrome',
                        browser_version: '55.0',
                        os: 'OS X',
                        os_version: 'Sierra'
                    },
                    bs_firefix_mac: {
                        base: 'BrowserStack',
                        os: 'OS X',
                        os_version: 'Sierra',
                        browser: 'firefox',
                        browser_version: '50.0'
                    },
                    bs_ie9_windows: {
                        base: 'BrowserStack',
                        browser: 'ie',
                        browser_version: '9.0',
                        os: 'Windows',
                        os_version: '7'
                    }
                },
                browsers: [
                    'bs_chrome_mac',
                    'bs_firefix_mac'
                ],
                // if true, Karma captures browsers, runs the tests and exits
                singleRun: true
            }
        )
    )
}
