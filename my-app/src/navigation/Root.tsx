import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Espacio from '../screens/Espacio'
import Espacios from '../screens/Espacios'
import Evento from '../screens/Evento'
import Eventos from '../screens/Eventos'

import { RootStackParamList, RootTabsParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: 'CulturElx',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'orange' },
        }}
      />
      <Stack.Screen
        name="Espacio"
        component={Espacio}
        options={{ headerStyle: { backgroundColor: 'orange' } }}
      />
      <Stack.Screen
        name="Evento"
        component={Evento}
        options={{ headerStyle: { backgroundColor: 'orange' } }}
      />
    </Stack.Navigator>
  )
}
function MyTabs() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 16 },
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        options={{
          tabBarLabel: 'Eventos',
        }}
        name="Eventos"
        component={Eventos}
      />
      <Tabs.Screen
        options={{ tabBarLabel: 'Espacios' }}
        name="Espacios"
        component={Espacios}
      />
    </Tabs.Navigator>
  )
}

export default MyStack
