
'use strict';

// 参数校验中间件
module.exports = () => async function validator(ctx, next) {
    const { app } = ctx;
    const config = app.config;

    try {
        await next();
    } catch (e) {
        ctx.body = {
            code: 400,
            desc: config.env === 'prod' ? '参数错误' : e.message
        };
    }
};