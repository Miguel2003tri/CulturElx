import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  Pressable,
  Image,
} from 'react-native'

import { NetworkStatus, useEventosQuery } from '../api'
import { EventosProps } from '../navigation/types'

import Espacios from './Espacios'

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
        <View>
          <Text>No hay eventos disponibles </Text>
        </View>
      }
      renderItem={({ item }) => {
        return (
          <Pressable
            onPress={() => {
              navigation.navigate('Evento', { id: item.id })
            }}
          >
            <View style={styles.container}>
              <View>
                <Image style={styles.img} source={{ uri: item.img }}></Image>
              </View>
              <View style={styles.text}>
                <Text style={styles.texto}>{item.nombre}</Text>
                <Text style={styles.hora}>
                  {item.fecha} - {item.Espacio.ubicacion}
                </Text>
                <Text style={styles.tipo}>{item.Tipo_evento.nombre}</Text>
              </View>
            </View>
          </Pressable>
        )
      }}
    />
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: 25,
  },
  texto: {
    fontSize: 17,
    fontWeight: 'bold',
    padding: 5,
  },
  text: {
    paddingRight: 50,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  floatlistcontainer: {
    flex: 1,
    padding: 10,
  },
  hora: {},
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginLeft: 50,
    marginRight: 20,
  },
  tipo: {
    color: '#804000',
  },
})

export default Eventos
