/*
 * @Author: 杨宏旋
 * @Date: 2021-07-05 09:59:13
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-06 13:06:43
 * @Description:
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'feat',
        'docs',
        'fix',
        'perf',
        'revert',
        'refactor',
        'style',
        'test',
        'init',
        'build',
        'release',
        'delete',
      ],
    ],
  },
}
