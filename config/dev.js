// 测试环境
const config = {
  // 启动端口
  port: 3003,

  // 数据库配置
  database: {
    DATABASE: "pro1",
    USERNAME: "root",
    PASSWORD: "Root_1234",
    PORT: "3306",
    HOST: "127.0.0.1",
  },

  //log4js配置
  log4jsConfig: {
    appenders: {
      //错误日志
      error: {
        type: "datefile", //日志类型
        filename: "logs/error/error", //日志输出位置
        alwaysIncludePattern: true, //是否总是有后缀名
        pattern: ".dd.log", //后缀，每天创建一个新的日志文件
        // maxLogSize: 104800,
        // backups: 10,
      },
      //响应日志
      response: {
        type: "datefile",
        filename: "logs/response/response",
        alwaysIncludePattern: true, //是否总是有后缀名
        pattern: ".dd.log", //后缀，每天创建一个新的日志文件
      },
      console: {
        type: "console",
        layout: {
          type: "coloured",
        },
      },
    },
    categories: {
      error: { appenders: ["error", "console"], level: "error" },
      response: { appenders: ["response", "console"], level: "info" },
      default: { appenders: ["console"], level: "all" },
    },
  },
};

module.exports = config;
