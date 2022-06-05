import React from 'react'
import {
  FlatList,
  ScrollView,
  SectionList,
  SectionListProps,
} from 'react-native'

import type { Params } from '../types'

import { useSmartScroll } from '../useSmartScroll'

// TODO generic type
interface Props<T> extends SectionListProps<T>, Params {
  readonly children: React.ReactNode
}

export const listFactory = <T,>(
  ListComponent: typeof FlatList | typeof SectionList | typeof ScrollView
) => {
  const ListFactory = ({
    children,
    scrollEnabled,
    onLayout,
    onContentSizeChange,
    horizontal,
    onSmartScrollStatusChange,
    ...props
  }: Props<T>) => {
    // let Component: typeof FlatList | typeof SectionList | typeof ScrollView

    // switch (ListComponent) {
    //   case 'FlatList':
    //     Component = FlatList
    //     break

    //   case 'SectionList':
    //     Component = SectionList
    //     break

    //   default:
    //     Component = ScrollView
    //     break
    // }

    const { handleContentSizeChange, handleLayout, isScrollEnabled } =
      useSmartScroll({
        horizontal,
        onSmartScrollStatusChange,
        onLayout,
        onContentSizeChange,
      })

    return (
      <ListComponent
        {...props}
        horizontal={horizontal}
        scrollEnabled={isScrollEnabled}
        onLayout={handleLayout}
        onContentSizeChange={handleContentSizeChange}
      />
    )
  }

  return ListFactory
}
