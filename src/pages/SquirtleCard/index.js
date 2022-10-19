import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Data from './Data'
const SquirtleCard = () => {
    const styles = useStyles()
  return (
      <View style={styles.container}>
        <View style={styles.containerHeader}>
        <Text style={styles.title}>Sobre</Text>
        </View>
        <View style={styles.containerBody}>
          <Text style={styles.info}>A concha de Squirtle não é usada apenas para proteção. A forma arredondada da concha e as ranhuras em sua superfície ajudam a minimizar a resistência na água, permitindo que este Pokémon nade em alta velocidade.</Text>
          <Data />
        </View>
      </View>
  )
}

export default SquirtleCard