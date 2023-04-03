import { View, Text, StyleSheet } from 'react-native'
import { EventoProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Evento: React.FC<EventoProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Estamos en Evento</Text>
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

export default Evento
