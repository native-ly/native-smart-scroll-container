import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import SmartScrollContainer from '../src'

describe('SmartScrollContainer', () => {
  // it('should render container with disabled scroll', () => {

  // })

  it('should set scroll state automatically', () => {
    const { getByTestId } = render(
      <SmartScrollContainer testID="scroll-container" style={{ height: 500 }}>
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    expect(true).toBe(false)

    // expect(getByTestId('scroll-container'))
  })

  // TODO force disabled
  it('should render container with force enabled scroll', () => {
    const { getByTestId } = render(
      <SmartScrollContainer
        testID="scroll-container"
        scrollEnabled={true}
        style={{ height: 500 }}
      >
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    expect(true).toBe(false)
  })

  it('should render container with enabled horizontal scroll', () => {
    const { getByTestId } = render(
      <SmartScrollContainer
        testID="scroll-container"
        scrollEnabled={true}
        horizontal
        style={{ height: 500 }}
      >
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    expect(true).toBe(false)
  })
})
