import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useStyles from './styles'
import { colors, textColor } from '../../assets/styles/colors'
const Tag = ({type}) => {
  const styles = useStyles()
  return (
    <View style={{...styles.tag, backgroundColor: colors[type]}}>
      <Text style={{color: textColor.white, textTransform: 'capitalize'}}>{type}</Text>
    </View>
  )
}

export default Tag