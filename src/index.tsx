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
}: Props) => {
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [contentHeight, setContentHeight] = useState(0)

  return (
    <ScrollView
      scrollEnabled={scrollEnabled || wrapperHeight < contentHeight}
      onLayout={(e) => {
        setWrapperHeight(e.nativeEvent.layout.height)

        onLayout?.(e)
      }}
      onContentSizeChange={(w, h) => {
        setContentHeight(h)

        onContentSizeChange?.(w, h)
      }}
    >
      {children}
    </ScrollView>
  )
}

export default SmartScrollContainer
