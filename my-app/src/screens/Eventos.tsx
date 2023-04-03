import { View, Text, StyleSheet, Button } from 'react-native'
import { EventosProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Eventos: React.FC<EventosProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Estamos en Eventos</Text>
      <Button title='Ir a Evento' onPress={()=>navigation.navigate("Evento",{id:1})}/>
      <StatusBar style="auto" />
    </View>
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

export default Eventos
