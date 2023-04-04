import { EventoProps } from '../navigation/types'
import { View, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import { useEventoQuery } from '../api'
import MapView, { Marker } from 'react-native-maps'

interface UbicacionProps {
  title:string
  style?: StyleProp<ViewStyle>
  lat: number
  long: number
}
const Ubicacion: React.FC<UbicacionProps> = ({ lat, long, style,title}) => {
  console.log(lat)
  return (
    <MapView

      style={[styles.maps,style]}
      initialRegion={{
        latitude: lat,
        latitudeDelta: 0.01,
        longitude: long,
        longitudeDelta: 0.01,
      }}
    >
      <Marker
        title={title}
        coordinate={{
          latitude: lat,
          longitude: long,
        }}
      >

      </Marker>
    </MapView>
  )
}
const styles = StyleSheet.create({
  maps: {
    alignContent:'center',
    width: 300,
    height: 400,
  },
})

export default Ubicacion
