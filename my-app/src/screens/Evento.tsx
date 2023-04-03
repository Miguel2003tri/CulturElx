import { View, Text, StyleSheet } from 'react-native'
import { EventoProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'
import { useEventoQuery } from '../api'
import TituloDescripcion from '../componetes/TituloDescripcion'

const Evento: React.FC<EventoProps> = ({ route }) => {
  const { id } = route.params
  const { data, loading } = useEventoQuery({ variables: { id } })
  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando ...</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
      <TituloDescripcion titulo={null} descripcion={data.evento.img} />
    </View>
    <View style={styles.row}>
      <TituloDescripcion titulo={'Fecha'} descripcion={data.evento.fecha} />
      <TituloDescripcion titulo={'Pases'} descripcion={data.evento.pases} />
    </View>

    <View style={styles.row}>
      <TituloDescripcion titulo={'Sala'} descripcion={data.evento.sala} />
      <TituloDescripcion
        titulo={'Director'}
        descripcion={data.evento.director}
      />
    </View>

    <View style={styles.row}>
      <TituloDescripcion
        titulo={'Duracion'}
        descripcion={data.evento.duracion}
      />
      <TituloDescripcion
        titulo={'Sinopsis'}
        descripcion={data.evento.sinopsis}
      />
    </View>

    <StatusBar style="auto" />
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,

  },
});

export default Evento
