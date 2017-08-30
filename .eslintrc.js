module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jasmine": true,
        "node": true
    },
    extends: [
        'eslint:recommended',
        'plugin:css-modules/recommended'
    ],
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'react',
        'css-modules'
    ],
    rules: {
        'indent': ["error", 4, {"SwitchCase": 1}],  //缩进风格
        //'linebreak-style': [2, "unix"],             //使用unix换行符\n 而不是\r\n
        'quotes': [
            2, "single",                            //字符串使用单引号
            { avoidEscape: true }                   //允许单引号中嵌套使用双引号
        ],
        'prefer-template': 2,                       //建议使用模板文字而不是字符串连接
        'template-curly-spacing': 2,                //强制在模板字符串中不使用间距
        'arrow-parens': [1, 'always'],              //箭头函数只有一个参数时，箭头函数不可以省略括号
        'no-alert': 0,                              //禁止使用alert confirm prompt
        'no-var': 2,                                //不能使用 var
        'no-new-object': 2,                         //不能使用 new Object();
        'no-new-func': 2,                           //不要使用 new Function();
        'no-array-constructor': 2,                  //不能使用 new Array(); 使用[]
        'no-eval': 2,                               //不能使用eval()函数
        'no-unused-vars': 1,                        //未使用的变量
        'no-multi-spaces': 1,                       //不允许多个空格
        'no-extra-semi': 2,                         //多余的分号
        'no-unexpected-multiline': 2,               //行尾缺少分号可能导致一些意外情况
        'no-multiple-empty-lines': [1, {"max": 1}], //空行最多不能超过2行
        'no-constant-condition': 1,                 //没有恒定条件，如 if(true){...}
        'no-useless-escape': 2,                     //禁止不必要的转义符
        'no-sparse-arrays': 2,                      //不允许出现稀疏数组
        'default-case': 2,                          //switch语句最后必须有default
        'semi': [2, "never"],                       //语句强制不使用分号结尾
        'generator-star-spacing': 0,                //generator 星星的位置
        'comma-style': [2, "last"],                 //逗号在每行末尾
        'comma-dangle': [2, "never"],               //在数组或对象的末尾不能加逗号
        'prefer-const': 2,                          //在能使用const时候使用const
        'object-shorthand': 1,                      //使用对象字面量速写语法
        'quote-props': ["error", "as-needed"],      //对象属性名称尽量不使用引号
        'array-callback-return': 2,                 //在数组方法的回调中强制执行return语句
        'prefer-rest-params': 2,                    //建议使用其余参数(...arg)而不是 arguments
        'space-before-function-paren': [2, 'never'],//不允许函数前空格
        'space-before-blocks': 2,                   //块前必须插入空格
        'no-param-reassign': 2,                     //禁止重新分配功能参数
        'prefer-spread': 2,                         //使用扩展运算符...来调用可变函数
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,

         'react/jsx-uses-react': 2,
         'react/jsx-uses-vars': 2,
         'css-modules/no-unused-class': 1
    }
};
