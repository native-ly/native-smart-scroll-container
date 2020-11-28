# [native-smart-scroll-container](https://github.com/native-ly/native-smart-scroll-container) (WIP)

[![NPM version](https://img.shields.io/npm/v/native-smart-scroll-container?style=flat-square)](https://www.npmjs.com/package/native-smart-scroll-container)
[![NPM downloads](https://img.shields.io/npm/dm/native-smart-scroll-container?style=flat-square)](https://www.npmjs.com/package/native-smart-scroll-container)
[![NPM license](https://img.shields.io/npm/l/native-smart-scroll-container?style=flat-square)](https://www.npmjs.com/package/native-smart-scroll-container)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-smart-scroll-container)
[![Codecov](https://img.shields.io/codecov/c/github/native-ly/native-smart-scroll-container?style=flat-square)](https://codecov.io/gh/native-ly/native-smart-scroll-container)
[![Travis](https://img.shields.io/travis/native-ly/native-smart-scroll-container/master?style=flat-square)](https://travis-ci.org/native-ly/native-smart-scroll-container)

## About

Enable scroll based on content size

## How to Install

First, install the library in your project by npm:

```sh
$ npm install native-smart-scroll-container
```

Or Yarn:

```sh
$ yarn add native-smart-scroll-container
```

## Options

Component uses ScrollViewProps

## Example

```js
import React from 'react'
import { View } from 'react-native'
import SmartScrollContainer from 'native-smart-scroll-container'

const App = () => {
  return (
    <SmartScrollContainer>
      <View
        style={{
          height: 1000,
          width: 200,
          backgroundColor: 'red',
        }}
      />
    </SmartScrollContainer>
  )
}
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
