import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { backgroundColors } from '../../assets/styles/colors'
const Card = () => {
  const styles = useStyles()
  return (
    <View style={{...styles.card, backgroundColor: backgroundColors['grass']}}>
      <Text style={styles.number}>#001</Text>
      <Text style={styles.cardTitle}>Bulbasaur</Text>
      <View>
      <Image
            style={styles.image}
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`,
            }}
          />
      </View>
    </View>
  )
}

export default Card