//#region Imports
import { View, Text, ImageBackground, ScrollView, FlatList } from 'react-native';
import { height } from "../../assets/constants";
import Pokeball_header from '../../assets/Images/Pokeball_header.png'
import useStyles from './styles'
import Input from "../../components/Input";
import Card from "../../components/Card";
import { backgroundColors } from '../../assets/styles/colors';
//#endregion

const Home = () => {
    const pokemons = [1, 4, 7]
    const styles = useStyles()
    return (
        <View>
        <View style={styles.container}>
            <View>
                <ImageBackground resizeMode="contain" style={{ width: '100%', height: height / 5 }} source={Pokeball_header}>
                    <View >
                        <Text style={styles.heading}>Pokédex</Text>
                        <Text style={styles.subHeading}>Seja bem-vindo à Pokedex da primeira geração de Pokémons</Text>
                        <Input />
                    </View>
                </ImageBackground>
            </View>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={pokemons}
                    renderItem={({ item }) => <Card item={item} />}
                />
            </View>
        </View>
        </View>
    );

}

export default Home