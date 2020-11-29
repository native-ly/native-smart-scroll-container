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
}: Props) => {
  const [wrapperSize, setWrapperSize] = useState(0)
  const [contentSize, setContentSize] = useState(0)

  return (
    <ScrollView
      horizontal={horizontal}
      scrollEnabled={scrollEnabled ?? wrapperSize < contentSize}
      onLayout={(e) => {
        setWrapperSize(e.nativeEvent.layout[horizontal ? 'width' : 'height'])

        onLayout?.(e)
      }}
      onContentSizeChange={(w, h) => {
        setContentSize(horizontal ? w : h)

        onContentSizeChange?.(w, h)
      }}
    >
      {children}
    </ScrollView>
  )
}

export default SmartScrollContainer
