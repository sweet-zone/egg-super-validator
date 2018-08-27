
'use strict';

const { superstruct } = require('superstruct');
const TYPES = Symbol('Context#TYPES');
const PLUGINNAME = 'superValidator';

module.exports = {
    /**
     * 通过配置扩展 superstruct 的验证支持类型
     * @returns {*}
     */
    get struct() {
        if(!this[TYPES]) {
            this[TYPES] = superstruct({
                types: this.app.config[PLUGINNAME].types || {}
            });
        }
        return this[TYPES];
    },

    /**
     * 参数校验
     * @param rule 规则
     * @param data 数据
     * 校验通过直接返回数据, 不通过 throw error
     * types 中间件拦截
     */
    verify(rule, data) {
        // 只校验 rule 中指定的字段
        let ruleData = {};
        for(let key in rule) {
            ruleData[key] = data[key];
        }
        const Model = this.struct(rule);
        return Model(ruleData);
    }
};