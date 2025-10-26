# antd-docs

[![NPM version](https://img.shields.io/npm/v/antd-docs.svg?style=flat)](https://npmjs.org/package/antd-docs)
[![NPM downloads](http://img.shields.io/npm/dm/antd-docs.svg?style=flat)](https://npmjs.org/package/antd-docs)

A vue library developed with dumi

## Usage

First, introduce css file:

```ts
import 'antd-docs/dist/style.css';
```

Then, introduce components:

```html
<script setup lang="ts">
  import { Foo, Bar } from 'antd-docs';
</script>
```

## Options

TODO

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# Locally preview the production build.
$ pnpm run docs:preview

# check your project for potential problems
$ pnpm run doctor

# Test
$ pnpm test

# Coverage
$ pnpm test:cov

# Lint
$ pnpm lint
```

## LICENSE

MIT
