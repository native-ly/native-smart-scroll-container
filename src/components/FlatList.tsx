import React from 'react'
import { FlatList as BaseFlatList, FlatListProps } from 'react-native'
import { listFactory } from './FactoryList'

// import type { Params } from '../types'

// import { useSmartScroll } from '../useSmartScroll'

// interface Props<T> extends FlatListProps<T>, Params {
//   readonly children: React.ReactNode
// }

// export const FlatList = <T,>({
//   children,
//   scrollEnabled,
//   onLayout,
//   onContentSizeChange,
//   horizontal,
//   onSmartScrollStatusChange,
//   ...props
// }: Props<T>) => {
//   const { handleContentSizeChange, handleLayout, isScrollEnabled } =
//     useSmartScroll({
//       horizontal,
//       onSmartScrollStatusChange,
//       onLayout,
//       onContentSizeChange,
//     })

//   return (
//     <BaseFlatList
//       {...props}
//       horizontal={horizontal}
//       scrollEnabled={isScrollEnabled}
//       onLayout={handleLayout}
//       onContentSizeChange={handleContentSizeChange}
//     />
//   )
// }

export const FlatList = listFactory<FlatListProps<T>>(BaseFlatList)
