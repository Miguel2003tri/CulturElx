import { View, Text, StyleSheet } from 'react-native'
import { EspacioProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Espacio: React.FC<EspacioProps> = ({route}) => {
  const {id}=route.params
  return (
    <View style={styles.container}>
      <Text>Estamos en Espacio{id}</Text>
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

export default Espacio
