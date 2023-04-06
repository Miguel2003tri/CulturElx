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
          <View style={styles.contenedor}>
            <Pressable
              style={styles.presable}
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
                  <Text>
                    {item.fecha} - {item.Espacio.ubicacion}
                  </Text>
                  <Text style={styles.tipo}>{item.Tipo_evento.nombre}</Text>
                </View>
              </View>
            </Pressable>
          </View>
        )
      }}
    />
  )
}
const styles = StyleSheet.create({
  presable: {
    backgroundColor: '#F9BB23',
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    padding: 25,
  },
  contenedor: {
    paddingLeft: 5,
    paddingRight: 5,
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
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginLeft: 50,
    marginRight: 20,
    resizeMode: 'contain',
  },
  tipo: {
    color: '#804000',
  },
})

export default Eventos
