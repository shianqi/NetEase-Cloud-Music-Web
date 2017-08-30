// Karma configuration
// Generated on Wed Aug 30 2017 09:45:21 GMT+0800 (中国标准时间)
const karmaConfig = require('./karma.conf.common.js')

module.exports = function(config) {
    config.set(
        Object.assign(
            {},
            karmaConfig,
            {
                // if true, Karma captures browsers, runs the tests and exits
                singleRun: true
            }
        )
    )
}
