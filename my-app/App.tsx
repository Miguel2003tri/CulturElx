import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import MyStack from './src/navigation/Root'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApiProvider uri={uri}>
        <SafeAreaProvider>
          <NavigationContainer>
            <MyStack></MyStack>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApiProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <MyStack></MyStack>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
