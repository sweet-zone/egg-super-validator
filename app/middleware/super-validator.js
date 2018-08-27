
'use strict';

// 参数校验中间件
module.exports = () => async function validator(ctx, next) {
    const { app } = ctx;
    const config = app.config;

    try {
        await next();
    } catch (e) {
        config.formatError && config.formatError(ctx, e);
    }
};