//#region Imports
import { View, Text, ImageBackground, FlatList } from 'react-native';
import { height } from "../../assets/constants";
import Pokeball_header from '../../assets/Images/Pokeball_header.png'
import useStyles from './styles'
import Card from "../../components/Card";
//#endregion

const Home = () => {
    const pokemons = [1, 4, 7]
    const styles = useStyles()
    return (
        <View>
        <View style={styles.container}>
            <View>
                <ImageBackground resizeMode="contain" style={{ width: '100%', height: height / 7 }} source={Pokeball_header}>
                    <View >
                        <Text style={styles.heading}>Pokédex</Text>
                        <Text style={styles.subHeading}>Seja bem-vindo à Pokedex da primeira geração de Pokémons</Text>
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