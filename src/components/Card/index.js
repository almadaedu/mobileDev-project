import { View, Text, Image, ImageBackground } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { backgroundColors } from '../../assets/styles/colors'
import Tag from '../Tag'
import Pokeball_BG from '../../assets/Images/pokeball-bg.png'
const Card = ({ item }) => {
  const styles = useStyles()
  let type = "grass"
  let name = "Bulbassauro"
  let number = "#001"
  if (item > 3) {
    number = "#004"
    type = "fire",
    name = "Charmander"
  }
  if (item > 6) {
    number = "#007"
    type = "water"
    name = "Squirtle"
  }
  return (
    <View style={{ ...styles.card, backgroundColor: backgroundColors[type] }}>
      <View style={{padding: 15}}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.cardTitle}>{name}</Text>
        <View style={styles.tag}>
          <Tag type={type} />
        </View>
      </View>
      <ImageBackground resizeMode='contain' source={Pokeball_BG} style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${item}.png`,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Card