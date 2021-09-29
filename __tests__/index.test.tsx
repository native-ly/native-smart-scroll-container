import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import SmartScrollContainer from '../src'

// TODO
describe('SmartScrollContainer', () => {
  it('should set scroll state automatically to enabled', () => {
    const { toJSON } = render(
      <SmartScrollContainer style={{ height: 500 }}>
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should set scroll state automatically to disabled', () => {
    const { toJSON } = render(
      <SmartScrollContainer style={{ height: 680 }}>
        <View style={{ height: 360 }} />
      </SmartScrollContainer>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render container with force disabled scroll', () => {
    const { toJSON } = render(
      <SmartScrollContainer
        testID="scroll-container"
        scrollEnabled={false}
        style={{ height: 480 }}
      >
        <View style={{ height: 1597 }} />
      </SmartScrollContainer>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render container with force enabled scroll', () => {
    const { toJSON } = render(
      <SmartScrollContainer
        testID="scroll-container"
        scrollEnabled={true}
        style={{ height: 760 }}
      >
        <View style={{ height: 1269 }} />
      </SmartScrollContainer>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render container with enabled horizontal scroll', () => {
    const { toJSON } = render(
      <SmartScrollContainer
        testID="scroll-container"
        scrollEnabled={true}
        horizontal
        style={{ height: 543 }}
      >
        <View style={{ height: 1234 }} />
      </SmartScrollContainer>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  // TODO update test
  // it('should adjust to layout change', () => {
  //   const onLayout = jest.fn()
  //   const onScroll = jest.fn()

  //   const { toJSON } = render(
  //     <SmartScrollContainer
  //       onLayout={onLayout}
  //       onScroll={onScroll}
  //       style={{ height: 860 }}
  //     >
  //       <View style={{ height: 1661 }} />
  //     </SmartScrollContainer>
  //   )

  //   expect(toJSON()).toMatchSnapshot()
  //   expect(onLayout).toHaveBeenCalledWith()
  //   expect(onScroll).toHaveBeenCalledWith()
  // })

  it.todo('add test for onSmartScrollStatusChange')
})
