import { from } from '@apollo/client'
import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

interface TituloDescripcionProps {
  titulo: string
  descripcion: string
}
const TituloDescripcion: React.FC<TituloDescripcionProps> = ({
  titulo,
  descripcion,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion} id="descripcion">
        {descripcion}
      </Text>
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
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 16,
    color: '#808080',
  },
})

export default TituloDescripcion
