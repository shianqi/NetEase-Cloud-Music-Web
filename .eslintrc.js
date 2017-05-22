// http://eslint.org/docs/user-guide/configuring
module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: [
        'eslint:recommended',
        "plugin:css-modules/recommended"
    ],
    // required to lint *.vue files
    plugins: [
        'react',
        'css-modules'
    ],
    // add your custom rules here
    rules: {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        'indent': ["error", 4],//缩进风格
        'no-unused-vars': 1,

        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        "react/display-name": 1,
        "react/jsx-boolean-value": 1,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "css-modules/unresolved": 0
    }
}