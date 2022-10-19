import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Data from './Data'
const CharmanderCard = () => {
    const styles = useStyles()
  return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
        <Text style={styles.title}>Sobre</Text>
        </View>
        <View style={styles.containerBody}>
          <Text style={styles.info}>A chama que queima na ponta de sua cauda é uma indicação de suas emoções. A chama oscila quando Charmander está se divertindo. Se o Pokémon ficar furioso, a chama queima ferozmente.</Text>
          <Data />
        </View>
      </View>
  )
}

export default CharmanderCard