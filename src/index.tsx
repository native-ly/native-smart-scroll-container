import React, { useState } from 'react'
import { ScrollViewProps, ScrollView, LayoutChangeEvent } from 'react-native'

interface Props extends ScrollViewProps {
  readonly children: React.ReactNode
}

const SmartScrollContainer = ({
  children,
  scrollEnabled,
  onLayout,
  onContentSizeChange,
  horizontal,
  ...props
}: Props) => {
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [contentSize, setContentSize] = useState(0)

  const isScrollEnabled =
    scrollEnabled ?? (horizontal ? wrapperWidth : wrapperHeight) < contentSize

  const handleLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout

    setWrapperWidth(width)
    setWrapperHeight(height)

    onLayout?.(e)
  }

  const handleContentSizeChange = (w: number, h: number) => {
    setContentSize(horizontal ? w : h)

    onContentSizeChange?.(w, h)
  }

  return (
    <ScrollView
      {...props}
      horizontal={horizontal}
      scrollEnabled={isScrollEnabled}
      onLayout={handleLayout}
      onContentSizeChange={handleContentSizeChange}
    >
      {children}
    </ScrollView>
  )
}

export default SmartScrollContainer
