import { useEffect } from 'react'
import React, { useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  Linking,
  TouchableWithoutFeedback,
  Modal,
  TouchableOpacity,
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

  const [modalVisible, setModalVisible] = useState(false)
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando ...</Text>
      </View>
    )
  }

  return (
    <View style={styles.scroll}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <Image style={styles.img} source={{ uri: data.evento.img }} />
          </TouchableWithoutFeedback>

          <View style={styles.tituloprecio}>
            <Text style={styles.titulo}>{data.evento.nombre}</Text>
            <Text style={styles.precio}>{data.evento.precio}€</Text>
          </View>

          <View style={styles.row}>
            <TituloDescripcion
              titulo={'Fecha'}
              descripcion={data.evento.fecha}
            />
            <TituloDescripcion
              titulo={'Pases'}
              descripcion={data.evento.pases}
            />
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
        </View>
      </ScrollView>
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Image style={styles.modalImg} source={{ uri: data.evento.img }} />

          <View style={styles.container2}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalImg: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    marginLeft: 50,
    marginBottom: 50,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 5,
    margin: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  modalCloseText: {
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    width: 20,
    height: 20,
    lineHeight: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Evento
