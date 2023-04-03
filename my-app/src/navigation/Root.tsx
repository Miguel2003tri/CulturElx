import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  RootStackParamList,
  RootTabsParamList,
} from './types'
import Home from '../screens/Home'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Eventos from '../screens/Eventos'
import Espacio from '../screens/Espacio'
import Evento from '../screens/Evento'
import Espacios from '../screens/Espacios'

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
      <Stack.Screen name="Espacio" component={Espacio} />
      <Stack.Screen name="Evento" component={Evento} />
    </Stack.Navigator>
  )
}
function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        options={{ tabBarLabel: 'Eventos' }}
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
