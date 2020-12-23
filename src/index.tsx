import React, { useState } from 'react'
import { ScrollViewProps, ScrollView } from 'react-native'

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

  const [contentWidth, setContentWidth] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  return (
    <ScrollView
      {...props}
      horizontal={horizontal}
      scrollEnabled={
        scrollEnabled ?? horizontal
          ? wrapperWidth < contentWidth
          : wrapperHeight < contentHeight
      }
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout

        setWrapperWidth(width)
        setWrapperHeight(height)

        onLayout?.(e)
      }}
      onContentSizeChange={(w, h) => {
        setContentWidth(w)
        setContentHeight(h)

        onContentSizeChange?.(w, h)
      }}
    >
      {children}
    </ScrollView>
  )
}

export default SmartScrollContainer
