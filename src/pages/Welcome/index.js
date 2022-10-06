//#region Imports

import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import useStyles from "./styles";
import AnimatedLottieView from "lottie-react-native";
import pokemonAnimation from '../../assets/Images/pokemon.json'
//#endregion
const Welcome = () => {
    const styles = useStyles()
    return (
        <View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.upperText}>Seja bem-vindo à</Text>
                <Text style={styles.subText}>Pokédex</Text>
            </View>
            <View style={styles.main}>
                <AnimatedLottieView source={pokemonAnimation} autoPlay={true} resizeMode={'cover'} loop={true} style={{width: 400, height: 350}}  />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </TouchableOpacity>
                <Text style={styles.upperText}>Encontre aqui diversos tipos de pokémon</Text>
            </View>
        </View>
    );

}

export default Welcome