//#region Imports
import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { height } from "../../assets/constants";
import Pokeball_header from '../../assets/Images/Pokeball_header.png'
import useStyles from '../../styles/commonStyles'
import Input from "../../components/Input";
//#endregion

const Home = () => {
    const styles = useStyles()
    return (
        <ImageBackground resizeMode="contain" style={{ width: '100%', height: height / 4 }} source={Pokeball_header}>
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.heading}>Pokédex</Text>
                    <Text style={styles.subHeading}>Seja bem-vindo à Pokedex da primeira geração de Pokémons</Text>
                    <Input />
                </View>
            </ScrollView>
        </ImageBackground>
    );

}

export default Home