import React from 'react'
import { View } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native'

import SmartScrollContainer from '../src'

describe('SmartScrollContainer', () => {
  it('should set scroll state automatically to enabled', () => {
    const { getByTestId } = render(
      <SmartScrollContainer testID="scroll-container" style={{ height: 500 }}>
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('scroll-container').props.scrollEnabled).toBe(true)
  })

  it('should set scroll state automatically to disabled', () => {
    const { getByTestId } = render(
      <SmartScrollContainer testID="scroll-container" style={{ height: 500 }}>
        <View style={{ height: 100 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('scroll-container').props.scrollEnabled).toBe(false)
  })

  it('should render container with force disabled scroll', () => {
    const { getByTestId } = render(
      <SmartScrollContainer
        testID="scroll-container"
        scrollEnabled={true}
        style={{ height: 500 }}
      >
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('scroll-container').props.scrollEnabled).toBe(true)
  })

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

    expect(getByTestId('scroll-container').props.scrollEnabled).toBe(true)
  })

  it('should render horizontal container', () => {
    const { getByTestId } = render(
      <SmartScrollContainer
        testID="scroll-container"
        horizontal
        style={{ width: 500 }}
      >
        <View style={{ width: 1600 }} />
      </SmartScrollContainer>
    )

    expect(getByTestId('scroll-container').props.scrollEnabled).toBe(true)
  })
})
