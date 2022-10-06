//#region Imports
import React from "react";
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import { height } from "../../assets/constants";
import Pokeball_header from '../../assets/Images/Pokeball_header.png'
import useStyles from '../../styles/commonStyles'
import Generation from '../../assets/Images/generation.png'
import Sort from '../../assets/Images/sort.png'
import Search from '../../assets/Images/search.png'
import Filter from '../../assets/Images/filter.png'
import { textColor } from '../../assets/styles/colors'
import IconButton from "../../components/IconButton";
import Input from "../../components/Input";
import Card from "../../components/Card";
//#endregion

const Home = () => {
    const styles = useStyles()
    return (
        <View>
            <ImageBackground resizeMode="contain" style={{ width: '100%', height: height / 4 }} source={Pokeball_header}>
                <View style={styles.container}>
                    <View style={{ ...styles.row, justifyContent: "flex-end", margin: 15 }}>
                        <IconButton>
                            <Image style={{ width: 20, height: 20 }} color={textColor.black} source={Generation} />
                        </IconButton>
                        <IconButton>
                            <Image style={{ width: 20, height: 17.33 }} color={textColor.black} source={Sort} />
                        </IconButton>
                        <IconButton>
                            <Image style={{ width: 20, height: 18 }} color={textColor.black} source={Filter} />
                        </IconButton>
                    </View>
                    <Text style={styles.heading}>Pokédex</Text>
                    <Text style={styles.subHeading}>Seja bem-vindo à Pokedex da primeira geração de Pokémons</Text>

                    <View style={styles.searchContainer}>
                    <Input placeholder="Procure um pokémon" placeholderTextColor={textColor.grey}/>
                        <IconButton>
                            <Image style={{ width: 16, height: 16 }} color={textColor.white} source={Search} />
                        </IconButton>
                    </View>
                    <Card />
                    <Card />
                    <Card />
                </View>
            </ImageBackground>
        </View>
    );

}

export default Home