import React, { useCallback, useMemo, useState } from 'react'
import { ScrollViewProps, ScrollView, LayoutChangeEvent } from 'react-native'

interface Props extends ScrollViewProps {
  readonly children: React.ReactNode
}

type HandleLayoutCallback = (e: LayoutChangeEvent) => void
type HandleContentSizeChangeCallback = (w: number, h: number) => void

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

  const isScrollEnabled = useMemo(
    () =>
      scrollEnabled ??
      (horizontal ? wrapperWidth : wrapperHeight) < contentSize,
    [contentSize, horizontal, scrollEnabled, wrapperHeight, wrapperWidth]
  )

  const handleLayout = useCallback<HandleLayoutCallback>(
    (e) => {
      const { width, height } = e.nativeEvent.layout

      setWrapperWidth(width)
      setWrapperHeight(height)

      onLayout?.(e)
    },
    [onLayout]
  )

  const handleContentSizeChange = useCallback<HandleContentSizeChangeCallback>(
    (w, h) => {
      setContentSize(horizontal ? w : h)

      onContentSizeChange?.(w, h)
    },
    [horizontal, onContentSizeChange]
  )

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
