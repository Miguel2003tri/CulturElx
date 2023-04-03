import { View, Text, StyleSheet,Button } from 'react-native'
import { EspaciosProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Espacios: React.FC<EspaciosProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Estamos en Espacios</Text>
      <Button title='Ir a Espacio' onPress={()=>navigation.navigate("Espacio",{id:1})}/>

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
