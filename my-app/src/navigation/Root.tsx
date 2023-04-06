import 'react-native-gesture-handler'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DrawerLateral from '../componetes/DrawerLateral'
import colors from '../lib/colors'
import Espacio from '../screens/Espacio'
import Espacios from '../screens/Espacios'
import Evento from '../screens/Evento'
import Eventos from '../screens/Eventos'
import EventosFavoritos from '../screens/EventosFavoritos'

import { RootStackParamList, RootTabsParamList } from './types'

const Drawer = createDrawerNavigator()

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>()

function MyStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{ headerStyle: { backgroundColor: colors.principal } }}
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
        <Stack.Screen
          name="Evento"
          component={Evento}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Favoritos" component={EventosFavoritos} />
      </Stack.Navigator>
    </>
  )
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerLateral {...props}></DrawerLateral>}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Root" component={MyStack} />
    </Drawer.Navigator>
  )
}

function MyTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarInactiveTintColor: colors.gris,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          backgroundColor: colors.principal,
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
    </Tabs.Navigator>
  )
}
export default MyDrawer
