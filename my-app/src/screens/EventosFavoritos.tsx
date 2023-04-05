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
import { EspaciosFavoritosProps } from '../navigation/types'

const EspaciosFavoritos: React.FC<EspaciosFavoritosProps> = ({
  navigation,
}) => {
  const { data, loading, refetch, networkStatus } = useEspacioQuery({
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
        data={data?.espacio.Eventos}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>No hay eventos guardados</Text>
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.contenedor}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Espacio', { id: item.id })
                }}
                style={{ flexDirection: 'row', alignItems: 'center' }}
              >
                <Image source={{ uri: item.img }} style={styles.img} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 28 }}>
                    {item.nombre}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#888888' }}>
                    {item.duracion}
                  </Text>
                </View>
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
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
  },
  contenedor: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 20,
  },
  img: {
    display: 'flex',
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  lastImg: {
    display: 'flex',
    width: 350,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginTop: 50,
  },
  lastText: {
    marginBottom: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
})

export default EspaciosFavoritos
