# nconf-js

[![NPM version][npm-image]][npm-url]

JS format plugin for [nconf](https://www.npmjs.org/package/nconf)

## Usage

```js
let nconf = require('nconf');

nconf.file({
  file: '/path/to/some/file.js',
  format: require('nconf-js')
});
```

or to add general YAML file support

```js
let nconf = require('nconf');

nconf.formats.js = require('nconf-js');

// and then you can do

nconf.file({ file: '/path/to/some/file.js', format: nconf.formats.js });
```

## Install

```bash
npm install nconf nconf-js
```

## License

MIT