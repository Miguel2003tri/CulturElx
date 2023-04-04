import React from 'react'
import { useEffect } from 'react'

import { StatusBar } from 'expo-status-bar'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Linking,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { useEventoQuery } from '../api'
import TituloDescripcion from '../componetes/TituloDescripcion'
import { EventoProps } from '../navigation/types'
const { width, height } = Dimensions.get('window')

const Evento: React.FC<EventoProps> = ({ route,navigation }) => {
  const { id } = route.params
  const { data, loading } = useEventoQuery({ variables: { id } })

  useEffect(() => {
    if (data) {
      navigation.setOptions({ title: data.evento.nombre })
    }
  }, [data?.evento.nombre])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando ...</Text>
      </View>
    )
  }
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: data.evento.img }}></Image>

        <View style={styles.tituloprecio}>
          <Text style={styles.titulo}>{data.evento.nombre}</Text>
          <Text style={styles.precio}>{data.evento.precio}€</Text>
        </View>

        <View style={styles.row}>
          <TituloDescripcion titulo={'Fecha'} descripcion={data.evento.fecha} />
          <TituloDescripcion titulo={'Pases'} descripcion={data.evento.pases} />
        </View>

        <View style={styles.row}>
          <TituloDescripcion titulo={'Sala'} descripcion={data.evento.sala} />
          <TituloDescripcion
            titulo={'Duracion'}
            descripcion={data.evento.duracion}
          />
        </View>

        <View style={styles.row}>
          <TituloDescripcion
            titulo={'Ubicacion'}
            descripcion={data.evento.Espacio.ubicacion}
          />
          <TituloDescripcion
            titulo={'Director'}
            descripcion={data.evento.director}
          />
        </View>
        <View style={styles.row}>
          <TituloDescripcion
            titulo={'Sinopsis'}
            descripcion={data.evento.sinopsis}
          />
        </View>
        <View style={styles.row}>
          <View style={styles.boton}>
            <Button
              title="Ver trailer"
              onPress={() => {
                Linking.openURL(data.evento.trailer)
              }}
            />
          </View>
        </View>
        <View style={styles.row}>
          <TituloDescripcion
            titulo={'Reparto'}
            descripcion={data.evento.reparto}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  boton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  img: {
    width,
    height: height / 2,
    resizeMode: 'contain',
  },
  tituloprecio: {
    flexDirection: 'row',
  },
  titulo: {
    fontSize: 25,
    padding: 20,
  },
  precio: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingRight: 10,
  },
})

export default Evento
