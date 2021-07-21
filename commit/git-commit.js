/*
 * @Author: 杨宏旋
 * @Date: 2021-07-06 13:07:14
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-06 13:07:15
 * @Description:
 */
const shell = require('shelljs')
const inquirer = require('inquirer')
const prompsConfig = {
  ciType: [
    {
      type: 'list',
      name: 'type',
      message: '请选择本次提交的类型:',
      choices: [
        {
          name: '引入新特性',
          value: 'feat',
        },
        {
          name: '改进代码的结构格式/样式',
          value: 'style',
        },
        {
          name: '修复 bug',
          value: 'fix',
        },
        {
          name: '提升性能',
          value: 'perf',
        },
        {
          name: '删除代码或文件',
          value: 'delete',
        },
        {
          name: '其他修改, 比如改变构建流程、或者增加依赖库、工具等',
          value: 'chore',
        },
        {
          name: '重构',
          value: 'refactor',
        },
        {
          name: '撰写文档',
          value: 'docs',
        },
        {
          name: '增加测试',
          value: 'test',
        },
        {
          name: '更新打包文件',
          value: 'build',
        },
        {
          name: '初次提交',
          value: 'init',
        },
        {
          name: '发布/版本标签',
          value: 'release',
        },
        {
          name: '部署功能',
          value: 'deploy',
        },
        {
          name: '代码回滚',
          value: 'revert',
        },
        {
          name: 'CI持续集成修改',
          value: 'ci',
        },
      ],
    },
  ],
  ciMsg: {
    type: 'input',
    name: 'msg',
    message: '请输入提交文本:',
    validate: function(value) {
      if (value) {
        return true
      }
      return '文本必须输入!'
    },
  },
}

async function gitCommit() {
  let { type } = await inquirer.prompt(prompsConfig.ciType)
  let { msg } = await inquirer.prompt(prompsConfig.ciMsg)

  shell.exec(`git commit -m "${type}: ${msg}"`, function() {
    console.log(`\n提交脚本: git commit -m "${type}: ${msg}"`)
  })
}

gitCommit()
