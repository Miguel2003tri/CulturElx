import { View, Text, StyleSheet } from 'react-native'
import { HomeProps } from '../navigation/types'
import { StatusBar } from 'expo-status-bar'

const Home: React.FC<HomeProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Estamos en home</Text>
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
})

export default Home
