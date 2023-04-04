import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Espacio from '../screens/Espacio'
import Espacios from '../screens/Espacios'
import Evento from '../screens/Evento'
import Eventos from '../screens/Eventos'
import { StyleSheet } from 'react-native'

import { RootStackParamList, RootTabsParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>()

function MyStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ title: 'CulturElx', headerTitleAlign: 'center'}}

      />
      <Stack.Screen name="Espacio" component={Espacio}/>
      <Stack.Screen name="Evento" component={Evento}/>
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
const styles = StyleSheet.create({
  color: {
    backgroundColor: '#F9BB23',

  },
  estilo:{
    backgroundColor: '#F9BB23',

  }
})

export default MyStack
