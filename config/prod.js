// 正式环境
const config = {
  // 启动端口
  port: 80,

  // 数据库配置
  database: {
    DATABASE: 'frog_library',
    USERNAME: 'root',
    PASSWORD: 'bjfrog',
    PORT: '3306',
    HOST: '192.168.100.201'
  },

  //log4js配置
  log4jsConfig: {
    appenders: {
      //错误日志
      error: {
        type: 'file', //日志类型
        filename: 'logs/error/error', //日志输出位置
        alwaysIncludePattern: true, //是否总是有后缀名
        pattern: '.dd.log', //后缀，每天创建一个新的日志文件
      },
      //响应日志
      response: {
        type: 'file',
        filename: 'logs/response/response',
        alwaysIncludePattern: true, //是否总是有后缀名
        pattern: '.dd.log', //后缀，每天创建一个新的日志文件
      },
    },
    categories: {
      error: {appenders: ['error'], level: 'error'},
      response: {appenders: ['response'], level: 'info'},
      default: { appenders: ['response'], level: 'all' }
    }
  }
};

module.exports = config;