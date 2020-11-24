import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import SmartScrollContainer from '../src'

describe('SmartScrollContainer', () => {
  it('should render container with disabled scroll', () => {})

  it('should render container with enabled scroll', () => {
    const { getByTestId } = render(
      <SmartScrollContainer testID="scroll-container" style={{ height: 500 }}>
        <View style={{ height: 1600 }} />
      </SmartScrollContainer>
    )

    // expect(getByTestId('scroll-container'))
  })

  it('should render container with force enabled scroll', () => {})

  it('should render container with enabled horizontal scroll', () => {})
})
