import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { ScrollViewProps, ScrollView, View } from 'react-native'

interface Props extends ScrollViewProps {
  readonly children: React.ReactNode
  onSmartScrollStatusChange?: (isScrollEnabled: boolean) => void
}

type HandleLayoutCallback = NonNullable<ScrollViewProps['onLayout']>
type HandleContentSizeChangeCallback = NonNullable<
  ScrollViewProps['onContentSizeChange']
>

const SmartScrollContainer = ({
  children,
  scrollEnabled,
  onLayout,
  onContentSizeChange,
  horizontal,
  onSmartScrollStatusChange,
  ...props
}: Props) => {
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [contentSize, setContentSize] = useState(0)

  const isScrollEnabled = useMemo(
    () =>
      scrollEnabled ||
      (horizontal ? wrapperWidth : wrapperHeight) < contentSize,
    [contentSize, horizontal, scrollEnabled, wrapperHeight, wrapperWidth]
  )

  useEffect(() => {
    onSmartScrollStatusChange?.(isScrollEnabled)
  }, [isScrollEnabled, onSmartScrollStatusChange])

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

  const Component = !scrollEnabled && !horizontal ? View : ScrollView

  return (
    <Component
      {...props}
      horizontal={horizontal}
      scrollEnabled={isScrollEnabled}
      onLayout={handleLayout}
      onContentSizeChange={handleContentSizeChange}
    >
      {children}
    </Component>
  )
}

export default SmartScrollContainer
