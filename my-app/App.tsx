import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyStack from './src/navigation/Root'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler'
import { ApiProvider } from './src/api'
import Constants from 'expo-constants'
const uri = Constants.manifest.extra.api
console.log(uri)
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
