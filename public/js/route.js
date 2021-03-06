// 暂时没想好用在哪
const errorThrow = (ctx, err) => {
  ctx.response.status = err.statusCode || err.status || 500;
  ctx.response.body = {
    message: err.message
  };
  // 错误被try...catch捕获，不会触发error事件, 手动释放error事件，才能让监听函数生效
  ctx.app.emit('error', err, ctx);
};

// 请求成功
const resSuccess = (ctx, data) => {
  ctx.response.status = 200;
  ctx.response.body = {
    code: 1,
    msg: '请求成功',
    data: data
  };
};

// 请求失败
const resFailure = (ctx, data) => {
  ctx.response.status = 200;
  ctx.response.body = {
    code: 0,
    msg: '请求失败',
    data: data
  };
  ctx.app.emit('error', data, ctx);
};

// 参数错误
const parameterErr = (ctx, data) => {
  ctx.response.status = 200;
  ctx.response.body = {
    code: 2,
    msg: '参数错误',
    data: data
  };
  ctx.app.emit('error', data, ctx);
};

// token失效
const resTokenErr = (ctx, data) => {
  console.log(ctx)
  ctx.response.status = 401;
  ctx.response.body = {
    code: 0,
    msg: '请求失败',
    data: data
  };
  ctx.app.emit('error', data, ctx);
};

module.exports={
  resSuccess,
  errorThrow,
  resFailure,
  parameterErr,
  resTokenErr
};