// Karma configuration
// Generated on Wed Aug 30 2017 09:45:21 GMT+0800 (中国标准时间)
const karmaConfig = require('./karma.conf.common.js')

module.exports = function(config) {
    // Example set of browsers to run on Sauce Labs
    // Check out https://saucelabs.com/platforms for all browser/platform combos
    const customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'chrome',
            platform: 'Windows 7',
            version: '35'
        },
        sl_firefox: {
            base: 'SauceLabs',
            browserName: 'firefox',
            version: '30'
        },
        sl_ios_safari: {
            base: 'SauceLabs',
            browserName: 'iphone',
            platform: 'OS X 10.9',
            version: '7.1'
        },
        sl_ie_11: {
            base: 'SauceLabs',
            browserName: 'internet explorer',
            platform: 'Windows 8.1',
            version: '11'
        },
        sl_android: {
            base: 'SauceLabs',
            browserName: 'Browser',
            platform: 'Android',
            version: '4.4',
            deviceName: 'Samsung Galaxy S3 Emulator',
            deviceOrientation: 'portrait'
        }
    }

    config.set(
        Object.assign(
            {},
            karmaConfig,
            {
                sauceLabs: {
                    testName: 'Web App Unit Tests',
                    recordScreenshots: false,
                    connectOptions: {
                        username: 'shianqi',
                        accessKey: 'f1d96776-1238-4ae3-b015-36118bef1a1a'
                    },
                    public: 'public'
                },
                customLaunchers,
                browsers: Object.keys(customLaunchers),
                reporters: ['dots', 'saucelabs'],
                // if true, Karma captures browsers, runs the tests and exits
                singleRun: true
            }
        )
    )
}
