/**
 *  === app config ===
 *  项目应用的配置
 *
 *  created at: Thu Nov 30 2017 17:35:34 GMT+0800 (CST)
 */
import env from '~/src/configs/env'
import path from 'path'

const production = {
  name: 'fee监控平台线上环境',
  port: 3000,
  proxy: false,
  absoluteLogPath: path.resolve(__dirname, '../../', 'log'),
  host: 'http://xxx.xxxx.com',
  proxy: true,
  mailAttachmentDownloadHost: 'http://127.0.0.0:3000' // 任务机地址
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
const development = {
  name: 'fee监控平台开发环境',
  port: 3000,
  proxy: false,
  host: 'http://dev-arms.fee.lianjia.com:8080',
  absoluteLogPath: path.resolve(__dirname, '../../', 'log')
}
// 测试环境配置
const testing = {
  name: 'fee监控平台测试环境',
  port: 3000,
  proxy: false,
  host: 'http://test-xxx.xxxx.com',
  absoluteLogPath: path.resolve(__dirname, '../../', 'log')
}

let config = {
  development,
  testing,
  production
}

export default config[env]
