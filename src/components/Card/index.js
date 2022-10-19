import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { backgroundColors } from '../../assets/styles/colors'
import Tag from '../Tag'
import Pokeball_BG from '../../assets/Images/pokeball-bg.png'
import Dots from '../../assets/Images/Dots_card.png'
import { width } from '../../assets/constants'
import { useNavigation} from '@react-navigation/native'
const Card = ({ item }) => {
  const navigation = useNavigation()
  const styles = useStyles()
  let type = "grass"
  let name = "Bulbassauro"
  let number = "#001"
  if (item > 3) {
    number = "#004"
    type = "fire"
    name = "Charmander"
  }
  if (item > 6) {
    number = "#007"
    type = "water"
    name = "Squirtle"
  }
  function navigateCard() {
    if(type === 'grass') {
      return 'BulbasaurCard'
    } else if(type == 'fire') {
      return 'CharmanderCard'
    } else {
      return 'SquirtleCard'
    }
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateCard())}>
      <View style={{ ...styles.card, backgroundColor: backgroundColors[type] }}>
        <ImageBackground resizeMode='contain' style={{ width: width / 1.7, height: 42 }} source={Dots}>
          <View style={{ padding: 15 }}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.cardTitle}>{name}</Text>
            <View style={styles.tag}>
              <Tag type={type} />
              <Tag type={number === '#001' ? 'poison' : undefined } />
            </View>
          </View>
        </ImageBackground>
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
    </TouchableOpacity>
  )
}

export default Card