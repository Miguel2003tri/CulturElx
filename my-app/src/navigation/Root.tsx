import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Espacio from '../screens/Espacio'
import Espacios from '../screens/Espacios'
import Evento from '../screens/Evento'
import Eventos from '../screens/Eventos'
import EventosFavoritos from '../screens/EventosFavoritos'

import { RootStackParamList, RootTabsParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>()

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerStyle: { backgroundColor: 'orange' } }}
    >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          title: 'CulturElx',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen name="Espacio" component={Espacio} />
      <Stack.Screen name="Evento" component={Evento} />
      <Stack.Screen name="Eventos Favoritos" component={EventosFavoritos} />
    </Stack.Navigator>
  )
}
function MyTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: 'orange',
        },
      })}
    >
      <Tabs.Screen
        name="Eventos"
        component={Eventos}
        options={({ route }) => ({
          tabBarLabel: 'Eventos',
          tabBarActiveBackgroundColor:
            route.name === 'Eventos' ? 'blue' : undefined,
        })}
      />
      <Tabs.Screen
        name="Espacios"
        component={Espacios}
        options={({ route }) => ({
          tabBarLabel: 'Espacios',
          tabBarActiveBackgroundColor:
            route.name === 'Espacios' ? 'blue' : undefined,
        })}
      />
      <Tabs.Screen
        name="Eventos Favoritos"
        component={EventosFavoritos}
        options={({ route }) => ({
          tabBarLabel: 'Eventos Favoritos',
          tabBarActiveBackgroundColor:
            route.name === 'Eventos Favoritos' ? 'blue' : undefined,
        })}
      />
    </Tabs.Navigator>
  )
}
export default MyStack
