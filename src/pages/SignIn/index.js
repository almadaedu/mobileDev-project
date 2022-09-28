//#region Imports

import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import useStyles from "./styles";

//#endregion
const SignIn = () => {
    const styles = useStyles()
    
    return(
        <View style={styles.container} >
           <Text>Olá</Text>
        </View>
    );

}

export default SignIn