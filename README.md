# egg-super-validator

egg controller 参数验证中间件

## Install

```bash
$ npm i egg-super-validator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.superValidator = {
  enable: true,
  package: 'egg-super-validator',
};
```

## Configuration

```js
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
```


```js
// {app_root}/config/config.default.js
import isNumber from 'is-number';
exports.superValidator = {
    types: {
        customType: isNumber
    }
};

// {app_root}/app/controller/home.js
const query = ctx.verify({
    id: 'customType',
    name: 'string?'
}, ctx.query);

// 更多关于 superstruct 可以参见: https://github.com/ianstormtaylor/superstruct
```

see [config/config.default.js](config/config.default.js) for more detail.

## Thanks

[egg-y-validator](https://github.com/MiYogurt/egg-y-validator)

## Questions & Suggestions

Please open an issue [here](https://github.com/zjzhome/egg-super-validator/issues).

## License

[MIT](LICENSE)
