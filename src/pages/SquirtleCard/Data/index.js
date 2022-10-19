import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Electric from '../../../assets/Images/electric.png'
import Grass from '../../../assets/Images/grassIcon.png'
import TrainingData from './TrainingData'

const Data = () => {
    const styles = useStyles()
    return (
        <View>
            <Text style={styles.infoTitle}>Dados da Pokédex</Text>
            <View style={styles.data}>
                <View>
                    <Text style={styles.infoText}>Espécie</Text>
                    <Text style={styles.infoText}>Tamanho</Text>
                    <Text style={styles.infoText}>Peso</Text>
                    <Text style={styles.infoText}>Habilidades</Text>

                </View>
                <View style={styles.infoAnswersData}>
                    <Text style={styles.infoAnswers}>Pokémon Tartaruga pequena</Text>
                    <Text style={styles.infoAnswers}>0.5m (1′08″)</Text>
                    <Text style={styles.infoAnswers}>9.0kg (19.8 lbs)</Text>
                    <Text style={styles.infoAnswers}>1. Torrente</Text>
                </View>
            </View>
            <View style={styles.weakness}>
                <Text style={styles.info}>Fraqueza</Text>
                <View style={styles.weaknessTypes}>
                    <Image style={styles.image} source={Electric} />
                    <Image  style={styles.image} source={Grass} />
                </View>
            </View>
            <TrainingData />
        </View>
    )
}

export default Data