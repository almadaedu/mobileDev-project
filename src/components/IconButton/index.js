//#region Imports
import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import useStyles from "./styles";
//#endregion

const Icon = ({ children, onPress, style, ...props }) => {
  const styles = useStyles()
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.icon, ...style }}>
        {children}
      </View>
    </TouchableOpacity>

  )
}

export default Icon