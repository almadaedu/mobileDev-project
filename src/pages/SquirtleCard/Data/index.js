import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Fire from '../../../assets/Images/fire.png'
import Flying from '../../../assets/Images/flying.png'
import Ice from '../../../assets/Images/ice.png'
import Psychic from '../../../assets/Images/psychic.png'

const Data = () => {
    const styles = useStyles()
    return (
        <View>
            <Text style={styles.infoTitle}>Dados da Pokédex</Text>
            <View style={styles.data}>
                <View style={styles.info}>
                    <Text style={styles.infoText}>Espécie</Text>
                    <Text style={styles.infoText}>Tamanho</Text>
                    <Text style={styles.infoText}>Peso</Text>
                    <Text style={styles.infoText}>Habilidades</Text>

                </View>
                <View style={styles.infoAnswers}>
                    <Text style={styles.infoText}>Pokémon semente</Text>
                    <Text style={styles.infoText}>0.7m (2′04″)</Text>
                    <Text style={styles.infoText}>6.9kg (15.2 lbs)</Text>
                    <Text style={styles.infoText}>1. Overgrow</Text>
                </View>
            </View>
            <View style={styles.weakness}>
                <Text style={styles.info}>Fraqueza</Text>
                <View style={styles.weaknessTypes}>
                    <Image style={styles.image} source={Fire} />
                    <Image  style={styles.image} source={Flying} />
                    <Image  style={styles.image} source={Ice} />
                    <Image  style={styles.image} source={Psychic} />
                </View>

            </View>
        </View>
    )
}

export default Data