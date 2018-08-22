# egg-super-validator

<!--
Description here.
-->

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

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
