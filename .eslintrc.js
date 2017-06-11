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
        "no-alert": 0,                              //禁止使用alert confirm prompt
        'indent': ["error", 4, {"SwitchCase": 1}],  //缩进风格
        'no-unused-vars': 1,
        "no-multi-spaces": 1,                       //不允许多个空格
        "no-extra-semi": 2,                         //多余的分号
        "no-unexpected-multiline": 2,               //行尾缺少分号可能导致一些意外情况
        "no-multiple-empty-lines": [1, {"max": 1}], //空行最多不能超过2行
        "default-case": 2,                          //switch语句最后必须有default
        "semi": [2, "never"],                      //语句强制分号结尾
        'generator-star-spacing': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        "react/display-name": 1,

        "no-case-declarations": 1,
        "react/jsx-boolean-value": 1,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "css-modules/unresolved": 0,
        "css-modules/no-unused-class": 1
    }
}
