import React, { useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native'

import { NetworkStatus, useEventosQuery } from '../api'
import { EspaciosFavoritosProps } from '../navigation/types'

const EspaciosFavoritos: React.FC<EspaciosFavoritosProps> = ({
  navigation,
}) => {
  const { data, loading, refetch, networkStatus } = useEventosQuery({
    notifyOnNetworkStatusChange: true,
  })

  const [showAlert, setShowAlert] = useState(false)
  const [avisoMostrado, setAvisoMostrado] = useState(false)

  const handleImagePress = () => {
    setShowAlert(true)
    setAvisoMostrado(true)
  }

  const handleAlertDismiss = () => {
    setShowAlert(false)
  }

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
          <View>
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
                  <Text style={styles.hora}>
                    {item.fecha} - {item.Espacio.ubicacion}
                  </Text>
                  <Text style={styles.tipo}>{item.Tipo_evento.nombre}</Text>
                  <TouchableOpacity onPress={handleImagePress}>
                    <Image
                      style={styles.browser}
                      source={{
                        uri: 'data:image/png;base64,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',
                      }}
                    />
                  </TouchableOpacity>
                  {showAlert && (
                    <View style={styles.alert}>
                      <Text>
                        No se puede borrar el evento, intentelo más tarde.
                      </Text>
                      <TouchableOpacity onPress={handleAlertDismiss}>
                        <Text style={styles.dismissButton}>OK</Text>
                      </TouchableOpacity>
                    </View>
                  )}
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
    resizeMode: 'contain',
  },
  tipo: {
    color: '#804000',
  },
  browser: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginLeft: 50,
    marginRight: 20,
    position: 'absolute',
    right: -270,
    bottom: -20,
  },
  alert: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 16,
    zIndex: 1,
  },
  dismissButton: {
    color: '#007AFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },
})

export default EspaciosFavoritos
