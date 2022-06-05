import React from 'react'
import { ScrollView as BaseScrollView, ScrollViewProps } from 'react-native'

import type { Params } from '../types'

import { useSmartScroll } from '../useSmartScroll'
import { listFactory } from './FactoryList'

interface Props extends ScrollViewProps, Params {
  readonly children: React.ReactNode
}

// export const ScrollView = ({
//   children,
//   scrollEnabled,
//   onLayout,
//   onContentSizeChange,
//   horizontal,
//   onSmartScrollStatusChange,
//   ...props
// }: Props) => {
//   const { handleContentSizeChange, handleLayout, isScrollEnabled } =
//     useSmartScroll({
//       horizontal,
//       onSmartScrollStatusChange,
//       onLayout,
//       onContentSizeChange,
//     })

//   return (
//     <BaseScrollView
//       {...props}
//       horizontal={horizontal}
//       scrollEnabled={isScrollEnabled}
//       onLayout={handleLayout}
//       onContentSizeChange={handleContentSizeChange}
//     >
//       {children}
//     </BaseScrollView>
//   )
// }

export const ScrollView = listFactory<ScrollViewProps>(BaseScrollView)
