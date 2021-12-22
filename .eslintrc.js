/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:18:12
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 14:57:35
 * @Description:
 */
const path = require('path')
const resolve = (_path) => path.resolve(__dirname, _path)
const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  globals: {
    document: true,
    localStorage: true,
    window: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser', // 配置ts解析器
  parserOptions: {
    project: resolve('./jsconfig.json'),
    tsconfigRootDir: resolve('./'),
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  extends: [
    'eslint:recommended', // eslint 推荐规则
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  // plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['off', 2],
    'no-unused-vars': 'error',
    'no-restricted-globals': ['error', ...DOMGlobals, ...NodeGlobals],
    'no-console': 'off',
    'no-restricted-globals': 'off',
    'prefer-destructuring': 0, // 优先使用数组和对象解构
    'no-var': 1, // 要求使用 let 或 const 而不是 var
    'no-useless-concat': 1, // 禁止不必要的字符串字面量或模板字面量的连接
    'prefer-const': 1, // 要求使用 const 声明那些声明后不再被修改的变量.如果一个变量从不重新分配，使用const声明更好。const 声明告诉读者，“这个变量永远不会被重新分配，”减少认知负荷并提高可维护性。
    eqeqeq: 1, // 要求使用 === 和 !==
    'arrow-parens': ['error', 'always'],
    'prefer-arrow-callback': 1, // 要求回调函数使用箭头函数
    'prefer-template': 1, // 要求使用模板字面量而非字符串连接
    'no-debugger': process.env.NODE_ENV !== 'development' ? 'error' : 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
  },
}
