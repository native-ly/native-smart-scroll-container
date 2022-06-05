import { useCallback, useMemo, useState, useEffect } from 'react'
import { ScrollViewProps, VirtualizedListProps } from 'react-native'

// type Params = Pick<
//   VirtualizedListProps<any>,
//   'horizontnal' | 'onLayout' | 'onContentSizeChange'
// > &

type HandleLayoutCallback = NonNullable<ScrollViewProps['onLayout']>
type HandleContentSizeChangeCallback = NonNullable<
  ScrollViewProps['onContentSizeChange']
>

export const useSmartScroll = ({
  horizontal,
  onSmartScrollStatusChange,
  onLayout,
  onContentSizeChange,
}: Params) => {
  const [wrapperWidth, setWrapperWidth] = useState(0)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [contentSize, setContentSize] = useState(0)

  const isScrollEnabled = useMemo(
    () => (horizontal ? wrapperWidth : wrapperHeight) < contentSize,
    [contentSize, horizontal, wrapperHeight, wrapperWidth]
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

  return {
    handleLayout,
    handleContentSizeChange,
    isScrollEnabled,
  }
}
