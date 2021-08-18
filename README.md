# [Native Smart Scroll Container](https://github.com/native-ly/native-smart-scroll-container)

[![NPM version](https://flat.badgen.net/npm/v/native-smart-scroll-container)](https://www.npmjs.com/package/native-smart-scroll-container)
[![NPM downloads](https://flat.badgen.net/npm/dm/native-smart-scroll-container)](https://www.npmjs.com/package/native-smart-scroll-container)
[![NPM license](https://flat.badgen.net/npm/license/native-smart-scroll-container)](https://www.npmjs.com/package/native-smart-scroll-container)
[![run in expo snack](https://img.shields.io/badge/Run%20in%20Snack-4630EB?style=flat-square&logo=EXPO&labelColor=FFF&logoColor=000)](https://snack.expo.io/@jbiesiada/native-smart-scroll-container)
[![Codecov](https://flat.badgen.net/codecov/c/github/native-ly/native-smart-scroll-container)](https://codecov.io/gh/native-ly/native-smart-scroll-container)
[![Travis](https://flat.badgen.net/travis/native-ly/native-smart-scroll-container)](https://travis-ci.com/native-ly/native-smart-scroll-container)
[![Bundle size](https://flat.badgen.net/packagephobia/install/native-smart-scroll-container)](https://packagephobia.com/result?p=native-smart-scroll-container)

## About

Enable scroll in the container based on content size

## How to Install

First, install the library in your project by npm:

```sh
$ npm install native-smart-scroll-container
```

Or Yarn:

```sh
$ yarn add native-smart-scroll-container
```

## Getting Started

**Connect the library with the project using ES6 import:**

```js
import SmartScrollContainer from 'native-smart-scroll-container'
```

## Options

Component extends [ScrollViewProps](https://reactnative.dev/docs/scrollview#props)

| Name                      | Type                               | Default     | Description                            |
| ------------------------- | ---------------------------------- | ----------- | -------------------------------------- |
| onSmartScrollStatusChange | (isScrollEnabled: boolean) => void | `undefined` | Callback on smart scroll status change |

## Example

```js
import React from 'react'
import SmartScrollContainer from 'native-smart-scroll-container'

const App = () => {
  return (
    <SmartScrollContainer>
      {/* React Native components & content here... */}
    </SmartScrollContainer>
  )
}

export default App
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
