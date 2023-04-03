import { View, Text, StyleSheet } from 'react-native'
import { EspaciosProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Espacios: React.FC<EspaciosProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Estamos en Espacios</Text>
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

export default Espacios
