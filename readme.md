# The default riot babel preset

[![Build Status](https://travis-ci.org/riot/babel-preset-es2015-riot.svg?branch=master)](https://travis-ci.org/riot/babel-preset-es2015-riot)

This preset includes all the default [babel es2015 plugins](https://github.com/babel/babel/blob/master/packages/babel-preset-es2015/index.js)
Allowing the use of the `es2015 modules` also in any riot tag

# Installation

`$ npm install babel-preset-es2015-riot --save-dev`

# Usage

Add a `.babelrc` file in the root of your project

```json
{
  "presets": [ "es2015-riot" ]
}
```

If you want to use the babel helpers you must change the `.babelrc` file in this way:

```json
{
  "presets": [ "es2015-riot" ],
  "plugins": [ "external-helpers-2" ]
}
```

# Babel 7

If you are using babel 7 you don't need to use this preset at all.
You can simply configure your `.babelrc` in this way:

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": [
          // wathever you need to support
          "last 2 versions"
        ]
      }
    ]
  ]
}
```

Remeber to install via npm the `@babel/core@7` and `@babel/preset-env@7` dependencies