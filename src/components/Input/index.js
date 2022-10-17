import { View, TextInput, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Search from '../../assets/Images/search.png'
import { colors, textColor } from '../../assets/styles/colors'
import IconButton from '../IconButton'
const Input = () => {
  const styles = useStyles()
  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput  style={styles.input} placeholder="Procure um pokémon" placeholderTextColor={textColor.grey} cursorColor={colors.black}/>
        <IconButton>
          <Image style={{ width: 16, height: 16 }} color={textColor.white} source={Search} />
        </IconButton>
      </View>
    </View>
  )
}

export default Input