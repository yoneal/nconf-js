# nconf-js

[![Version npm][npm-image]][npm-url]

JS format plugin for [nconf](https://www.npmjs.org/package/nconf)

## Usage

```js
let nconf = require('nconf');
require('nconfjs');

nconf.file({
  file: '/path/to/some/file.js',
  format: nconf.formats.js
});
```

## Install

```bash
npm install nconf nconf-js
```

## License

MIT