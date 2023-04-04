import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  Pressable,
} from 'react-native'

import { NetworkStatus, useEventosQuery } from '../api'
import { EventosProps } from '../navigation/types'

const Eventos: React.FC<EventosProps> = ({ navigation }) => {
  const { data, loading, refetch, networkStatus } = useEventosQuery({
    notifyOnNetworkStatusChange: true,
  })
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando ...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => {
          return item.id.toString()
        }}
        refreshControl={
          <RefreshControl
            refreshing={networkStatus === NetworkStatus.refetch}
            onRefresh={refetch}
          ></RefreshControl>
        }
        data={data?.eventos}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>No hay eventos</Text>
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View>
              <Pressable
                onPress={() => {
                  navigation.navigate('Evento', { id: item.id })
                }}
              >
                <Text>{item.nombre}</Text>
              </Pressable>
            </View>
          )
        }}
      />
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
