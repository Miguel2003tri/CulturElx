import { View, Text, StyleSheet, Button } from 'react-native'
import { EventosProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'
import { useEventosQuery } from '../api'

const Eventos: React.FC<EventosProps> = ({navigation}) => {
  const {data,loading}=useEventosQuery()
  if(loading){
    return(
      <View style={styles.container}>
      <Text>Cargando ...</Text>
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Tenemos  {data?.eventos?.length} eventos</Text>
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
