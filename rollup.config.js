/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:15:37
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 15:39:48
 * @Description:
 */
import path from 'path'
import resolve from 'rollup-plugin-node-resolve' // 依赖引用插件
import eslint from '@rollup/plugin-eslint' // eslint插件
import ts from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs' // commonjs模块转换插件
import alias from '@rollup/plugin-alias'
import packageJSON from './package.json'
import copy from 'rollup-plugin-copy'

const getPath = (_path) => path.resolve(__dirname, _path)
const projectRootDir = path.resolve(__dirname)
const extensions = ['.js', '.ts', '.tsx']
// ts
const tsPlugin = ts({
  tsconfig: getPath('./jsconfig.json'), // 导入本地ts配置
  extensions,
})
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss'],
})
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
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: [
        [
          '@babel/preset-env',
          {
            /* Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败 */
            modules: false,
          },
          '@babel/preset-typescript',
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            regenerator: true,
          },
        ],
      ],
    }),
    commonjs(),
    process.env.NODE_ENV !== 'development' &&
      terser({ compress: { drop_console: true, drop_debugger: true } }),
    copy({
      targets: [{ src: 'src/types', dest: 'lib' }],
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
const buildConf = (options) => Object.assign({}, commonConf, options)
export default outputMap.map((output) =>
  buildConf({
    output: { name: packageJSON.name, ...output },
  })
)
