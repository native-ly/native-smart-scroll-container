import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import SmartScrollContainer from '../src'

describe('SmartScrollContainer', () => {
  it('should set scroll state automatically to enabled', () => {
    const { toJSON, getByTestId, debug } = render(
      <SmartScrollContainer testID="smart-scroll" style={{ height: 500 }}>
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    debug()

    expect(getByTestId('smart-scroll')).toBe(true)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should set scroll state automatically to disabled', () => {
    const { toJSON, getByTestId } = render(
      <SmartScrollContainer testID="smart-scroll" style={{ height: 680 }}>
        <View style={{ height: 360 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('smart-scroll').scrollEnabled).toBe(false)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render container with force disabled scroll', () => {
    const { toJSON, getByTestId } = render(
      <SmartScrollContainer
        testID="smart-scroll"
        scrollEnabled={false}
        style={{ height: 480 }}
      >
        <View style={{ height: 1597 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('smart-scroll').scrollEnabled).toBe(false)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render container with force enabled scroll', () => {
    const { toJSON, getByTestId } = render(
      <SmartScrollContainer
        testID="smart-scroll"
        scrollEnabled={true}
        style={{ height: 760 }}
      >
        <View style={{ height: 1269 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('smart-scroll').scrollEnabled).toBe(true)
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
  it.skip('should adjust to layout change', () => {
    const onLayout = jest.fn()
    const onScroll = jest.fn()
    const onSmartScrollStatusChange = jest.fn()

    const { toJSON } = render(
      <SmartScrollContainer
        onLayout={onLayout}
        onScroll={onScroll}
        onSmartScrollStatusChange={onSmartScrollStatusChange}
        style={{ height: 860 }}
      >
        <View style={{ height: 1661 }} />
      </SmartScrollContainer>
    )

    expect(toJSON()).toMatchSnapshot()
    expect(onLayout).toHaveBeenCalledWith()
    expect(onScroll).toHaveBeenCalledWith()
    expect(onSmartScrollStatusChange).toHaveBeenCalledWith()

    // TODO test after resize
  })
})
