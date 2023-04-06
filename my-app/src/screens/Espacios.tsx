import React from 'react'

import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  RefreshControl,
  Pressable,
} from 'react-native'

import { NetworkStatus, useEspaciosQuery } from '../api'
import colors from '../lib/colors'
import { EspaciosProps } from '../navigation/types'

const Espacios: React.FC<EspaciosProps> = ({ navigation }) => {
  const { data, loading, refetch, networkStatus } = useEspaciosQuery({
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
        data={data?.espacios}
        ListEmptyComponent={
          <View style={styles.container}>
            <Text>No hay espacios disponibles</Text>
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
                    {item.ubicacion}
                  </Text>
                </View>
              </Pressable>
            </View>
          )
        }}
        ListFooterComponent={() => (
          <View>
            <Image
              source={{
                uri: 'https://images.mnstatic.com/67/69/6769385efd2210c3f5f6e28d2efc95f3.jpg?quality=75&format=pjpg&fit=crop&width=980&height=880&aspect_ratio=980%3A880',
              }}
              style={styles.lastImg}
            />
            <Text style={styles.lastText}>
              Disfruta de la cultura de tu ciudad
            </Text>
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blanco,
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

export default Espacios
