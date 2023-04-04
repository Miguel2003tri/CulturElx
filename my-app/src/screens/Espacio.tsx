import { useEffect } from 'react'
import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  Pressable,
} from 'react-native'

import { NetworkStatus, useEspacioQuery } from '../api'
import { EspacioProps } from '../navigation/types'

const Espacio: React.FC<EspacioProps> = ({ route, navigation }) => {
  const { id } = route.params
  const { data, loading, refetch, networkStatus, error } = useEspacioQuery({
    notifyOnNetworkStatusChange: true,
    variables: { id },
  })
  useEffect(() => {
    if (data) {
      navigation.setOptions({ title: data.espacio.nombre })
    }
  }, [data?.espacio.nombre])
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando ...</Text>
      </View>
    )
  }

  console.log({ data, error })
  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={networkStatus === NetworkStatus.refetch}
            onRefresh={refetch}
          ></RefreshControl>
        }
        data={data?.espacio.Eventos}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>No hay eventos para este espacio</Text>
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

export default Espacio
