import { View, Text, StyleSheet } from 'react-native'
import { EventosProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Eventos: React.FC<EventosProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Estamos en Eventos</Text>
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
