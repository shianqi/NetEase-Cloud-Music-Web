// Karma configuration
// Generated on Wed Aug 30 2017 09:45:21 GMT+0800 (中国标准时间)
const path = require('path')
const webpack = require('../webpack.config.common.js')

module.exports = {
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: path.join(__dirname, '../'),

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: [
    'jasmine',
    'jasmine-expect-jsx',
  ],

  // list of files / patterns to load in the browser
  files: [
    'spec/karma-entry.js',
    './src/**/*.jsx',
  ],

  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {
    'spec/karma-entry.js': ['webpack', 'sourcemap'],

    './src/**/*.jsx': ['webpack', 'coverage'],
  },

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['progress', 'coverage'],

  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: true,

  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: [
    'Chrome',
    'Firefox',
  ],

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,

  webpack: {
    // https://github.com/airbnb/enzyme/blob/master/docs/guides/karma.md
    devtool: 'inline-source-map',
    module: webpack.module,
    resolve: webpack.resolve,
    externals: {
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true,
      'react/addons': true,
    },
  },

  coverageReporter: {
    dir: path.join(__dirname, './coverage'),
    reporters: [
      // reporters not supporting the `file` property
      { type: 'html' },
      { type: 'lcov', subdir: 'lcov' },
    ],
  },
}
