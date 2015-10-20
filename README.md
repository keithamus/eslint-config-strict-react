# eslint-config-strict

ESLint sharable config for strict linting on React code.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-strict-react
```

If you're using npm < v3 you'll also need to install all of the dependencies of this project:

```bash
$ npm install --save-dev eslint eslint-plugin-react
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][] feature.

Simply use `strict-react` in your extends config to add React linting rules to your project. This can be layered with other eslint rules, for example [`eslint-config-strict`](https://github.com/keithamus/eslint-config-strict).

### How to use

Simply define your `.eslintrc` (or add a `eslintConfig` object to `package.json`)
like so:

```json
{
  "extends": ["strict-react"]
}
```

If you are using ES6 with React, you can enable the ES6 variant:

```json
{
  "extends": ["strict-react/es6"]
}
```

Add any additional plugins you want, for example:

```json
{
  "extends": ["other-config", "strict-react/es6"]
}
```

Feel free to define additional globals or rules, or override them as you see fit:

```json
{
  "extends": ["strict-react/es6"],

  "globals": {
    "blarg": true
  },

  "rules": {
      "react/jsx-boolean-value": 0
  }
}
```

For more details about how shareable configs work, see the
[ESLint documentation][extend].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
[extend]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files
