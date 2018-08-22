
'use strict';

const { superstruct } = require('superstruct');
const types = require('../types');
const struct = superstruct({
    types
});

module.exports = {
    /**
     * 参数校验
     * @param rule 规则
     * @param data 数据
     * 校验通过直接返回数据, 不通过 throw error
     * types 中间件拦截
     */
    verify(rule, data) {
        const Model = struct(rule);
        return Model(data);
    }
};