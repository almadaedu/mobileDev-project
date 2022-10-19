import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Data from './Data'
const BulbasaurCard = () => {
  const styles = useStyles()
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Sobre</Text>
      </View>
      <View style={styles.containerBody}>
        <Text style={styles.description}>Bulbasauro pode ser visto cochilando sob a luz do sol. Há uma semente em suas costas. Ao absorver os raios do sol, a semente cresce progressivamente.</Text>
        <Data />
      </View>
    </View>
  )
}

export default BulbasaurCard