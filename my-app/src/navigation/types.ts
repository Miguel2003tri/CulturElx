import { MaterialTopTabScreenProps } from '@react-navigation/material-top-tabs'
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: NavigatorScreenParams<RootTabsParamList>
  Espacio: { id: number }
  Evento: { id: number }
}
export type RootTabsParamList = {
  Espacios: undefined
  Eventos: undefined
}

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type EspaciosProps = CompositeScreenProps<
  MaterialTopTabScreenProps<RootTabsParamList, 'Espacios'>,
  NativeStackScreenProps<RootStackParamList>
>
export type EspacioProps = MaterialTopTabScreenProps<
  RootStackParamList,
  'Espacio'
>
export type EventosProps = CompositeScreenProps<
  MaterialTopTabScreenProps<RootTabsParamList, 'Eventos'>,
  NativeStackScreenProps<RootStackParamList>
>
export type EventoProps = MaterialTopTabScreenProps<
  RootStackParamList,
  'Evento'
>
