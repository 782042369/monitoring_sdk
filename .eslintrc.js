/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:18:12
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 10:26:35
 * @Description:
 */
const path = require('path')
const resolve = (_path) => path.resolve(__dirname, _path)
const DOMGlobals = ['window', 'document']
const NodeGlobals = ['module', 'require']

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser', // 配置ts解析器
  parserOptions: {
    project: resolve('./jsconfig.json'),
    tsconfigRootDir: resolve('./'),
    sourceType: 'module',
  },
  // plugins: ['prettier'],
  rules: {
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
  },
}
