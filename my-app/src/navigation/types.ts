import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
}
export type RootTabsParamList = {
  Eventos: undefined
  Espacios: undefined
  Evento: { id: number }
  Espacio: { id: number }
}
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type EspaciosProps = MaterialTopTabScreenProps<
  RootTabsParamList,
  'Espacios'
>
export type EspacioProps = MaterialTopTabScreenProps<
  RootTabsParamList,
  'Espacio'
>
export type EventosProps = MaterialTopTabScreenProps<
  RootTabsParamList,
  'Eventos'
>
export type EventoProps = MaterialTopTabScreenProps<RootTabsParamList, 'Evento'>
