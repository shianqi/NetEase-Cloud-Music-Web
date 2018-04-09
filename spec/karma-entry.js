const context = require.context('../spec', true, /[spec,test]\.js$/)
context.keys().forEach(context)
console.log('test files:', context.keys())
