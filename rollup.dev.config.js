/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:15:37
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 14:32:47
 * @Description:
 */
import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import { eslint } from 'rollup-plugin-eslint' // eslint插件
import ts from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
const getPath = (_path) => path.resolve(__dirname, _path)
import packageJSON from './package.json'

const extensions = ['.js', '.ts', '.tsx']
// ts
const tsPlugin = ts({
  tsconfig: getPath('./jsconfig.json'), // 导入本地ts配置
  extensions,
})

// eslint
const esPlugin = eslint({
  throwOnError: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
  fix: true,
})
// 基础配置
const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [
    resolve(extensions),
    esPlugin,
    tsPlugin,
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
  ],
}
// 需要导出的模块类型
const outputMap = [
  {
    file: 'lib/index.js', // 通用模块
    format: 'umd',
  },
]

const buildConf = (options) => Object.assign({}, commonConf, options)

export default outputMap.map((output) =>
  buildConf({
    output: { name: packageJSON.name, ...output },
  })
)
