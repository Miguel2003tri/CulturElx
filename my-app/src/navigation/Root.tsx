import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Espacio from '../screens/Espacio'
import Espacios from '../screens/Espacios'
import Evento from '../screens/Evento'
import Eventos from '../screens/Eventos'
import Home from '../screens/Home'

import { RootStackParamList, RootTabsParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>()

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ title: 'CulturElx', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  )
}
function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Eventos" component={Eventos} />
      <Tabs.Screen name="Evento" component={Evento} />
      <Tabs.Screen name="Espacio" component={Espacio} />
      <Tabs.Screen name="Espacios" component={Espacios} />
    </Tabs.Navigator>
  )
}

function EspacioStack() {
  return <Stack.Navigator></Stack.Navigator>
}
export default MyStack
