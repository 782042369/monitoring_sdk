/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:15:37
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 20:38:41
 * @Description:
 */
import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import { eslint } from 'rollup-plugin-eslint' // eslint插件
import ts from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import alias from '@rollup/plugin-alias'
const getPath = (_path) => path.resolve(__dirname, _path)
import packageJSON from './package.json'

const extensions = ['.js', '.ts', '.tsx']
// ts
const tsPlugin = ts({
  tsconfig: getPath('./jsconfig.json'), // 导入本地ts配置
  extensions,
})
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
})
const projectRootDir = path.resolve(__dirname)
// eslint
const esPlugin = eslint({
  throwOnError: true,
  throwOnWarning: true,
  include: ['src/**/*.ts'],
  exclude: ['node_modules/**', 'lib/**'],
  fix: true,
})
// 基础配置
const commonConf = {
  input: getPath('./src/index.ts'),
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: getPath('src'),
        },
      ],
      customResolver,
    }),
    resolve(),
    esPlugin,
    tsPlugin,
    babel({
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, ...extensions],
    }),
  ],
}
// 需要导出的模块类型
const outputMap =
  process.env.NODE_ENV === 'development'
    ? [
        {
          file: 'lib/index.js', // 通用模块
          format: 'umd',
          name: 'MonitorJS',
        },
      ]
    : [
        {
          file: 'lib/index.js', // 通用模块
          format: 'umd',
          name: 'MonitorJS',
        },
        {
          file: packageJSON.main, // 通用模块
          format: 'umd',
          name: 'MonitorJS',
        },
        {
          file: packageJSON.module, // es6模块
          format: 'es',
        },
      ]

process.env.NODE_ENV !== 'development' &&
  commonConf.plugins.push(
    commonjs({
      exclude: 'node_modules',
      include: 'src',
    }),
    terser({ compress: { drop_console: true, drop_debugger: true } })
  )

const buildConf = (options) => Object.assign({}, commonConf, options)

export default outputMap.map((output) =>
  buildConf({
    output: { name: packageJSON.name, ...output },
  })
)