'use strict';

/**
 * egg-super-types default config
 * @member Config#superValidator
 * @property {String} SOME_KEY - some description
 */
exports.superValidator = {
    // 默认作为中间件, 如果不需要则设置为 false
    // 可以在 config.onerror 中统一错误处理
    middleware: true,
    // 自定义 superstruct types
    types: {},
    // 出现错误时的处理
    // middleware 设置为 false 时不生效
    formatError (ctx, err) {
        ctx.status = 200;
        ctx.body = {
            code: 400,
            desc: err.message
        }
    },
};
