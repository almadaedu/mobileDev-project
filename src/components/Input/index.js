import { View, TextInput } from 'react-native'
import React from 'react'
import useStyles from './styles'
const Input = ({...props}) => {
  const styles = useStyles()
  return (
    <View>
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

export default Input