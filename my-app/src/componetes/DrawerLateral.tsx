import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DeawerLateral = ({navigation}) => {
  return (
    <View style={styles.contenedor}>
      <SafeAreaView style={styles.savearea}>
        <View style={styles.contenido}>
          <View style={styles.backgroundImage}>
            <Image
              style={styles.backgroundImage2}
              source={require('../images/silla2.png')}
            />
          </View>

          <View style={styles.icono}>
            <Pressable onPress={()=>navigation.navigate('Favoritos')}>
              <View style={styles.iconobg}>
                <Image
                  style={styles.img}
                  source={require('../images/favoritosicon.png')}
                />
              </View>
            </Pressable>

            <Text style={styles.textcenter} >Eventos Guardados</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.textcenter}>
              App desarrollada por Dalii Solutions & Estudio YOBO
            </Text>
            <Text>info@estudioyobo.com</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9BB23',
  },
  savearea: {
    flex: 1,
  },
  iconobg:{
    backgroundColor: 'white',
    borderRadius:20,
    padding:16,
    marginBottom:10,

  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  backgroundImage2: {
    flex: 1,
    resizeMode: 'contain',
    width: '100%',
    opacity: 0.4,
  },
  info: {
    alignItems: 'center',
  },
  textcenter: {
    textAlign: 'center',
    marginBottom: 10,
  },
  icono: {
    alignItems: 'center',
    justifyContent: 'center',
    width:80,

  },
  img: {
    alignItems: 'flex-end',
    width: 40,
    height: 40,
  },
  contenido: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 50,
  },
})

export default DeawerLateral
