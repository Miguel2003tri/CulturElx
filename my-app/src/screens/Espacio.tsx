import { useEffect } from 'react'
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

import { NetworkStatus, useEspacioQuery } from '../api'
import { EspacioProps } from '../navigation/types'
import Ubicacion from '../componetes/Ubicacion'

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

  return (
    <View>
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
            <>
              <View>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Evento', { id: item.id })
                  }}
                >
                  <View style={styles.container}>
                    <View>
                      <Image
                        style={styles.img}
                        source={{ uri: item.img }}
                      ></Image>
                    </View>
                    <View style={styles.text}>
                      <Text style={styles.texto}>{item.nombre}</Text>
                      <Text>{item.fecha}</Text>
                      <Text style={styles.tipo}>{item.Tipo_evento.nombre}</Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            </>
          )
        }}
      />
      {data?.espacio.lat && data?.espacio.lng && (
          <View style={styles.map}>
        <Ubicacion  lat={data.espacio.lat} long={data.espacio.lng} title={data.espacio.nombre} />
        </View>
      )}
    </View>
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
  map: {
    alignItems:'center',
    backgroundColor: '#fff',

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

export default Espacio
