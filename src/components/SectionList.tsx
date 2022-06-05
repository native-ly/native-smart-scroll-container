import React from 'react'
import { SectionList as BaseSectionList, SectionListProps } from 'react-native'

import type { Params } from '../types'

import { useSmartScroll } from '../useSmartScroll'

interface Props<T> extends SectionListProps<T>, Params {
  readonly children: React.ReactNode
}

export const SectionList = <T,>({
  children,
  scrollEnabled,
  onLayout,
  onContentSizeChange,
  horizontal,
  onSmartScrollStatusChange,
  ...props
}: Props<T>) => {
  const { handleContentSizeChange, handleLayout, isScrollEnabled } =
    useSmartScroll({
      horizontal,
      onSmartScrollStatusChange,
      onLayout,
      onContentSizeChange,
    })

  return (
    <BaseSectionList
      {...props}
      horizontal={horizontal}
      scrollEnabled={isScrollEnabled}
      onLayout={handleLayout}
      onContentSizeChange={handleContentSizeChange}
    />
  )
}
