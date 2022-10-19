import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from './styles'
import Water from '../../../assets/Images/water.png'
import Rock from '../../../assets/Images/rock.png'
import Earth from '../../../assets/Images/earth.png'
import TrainingData from './TrainingData'

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
                <View style={styles.infoAnswersData}>
                    <Text style={styles.infoAnswers}>Pokémon Lagarto</Text>
                    <Text style={styles.infoAnswers}>0.6m (2′00″)</Text>
                    <Text style={styles.infoAnswers}>8.5kg (18.7 lbs)</Text>
                    <Text style={styles.infoAnswers}>1. Brasa</Text>
                </View>
            </View>
            <View style={styles.weakness}>
                <Text style={styles.info}>Fraqueza</Text>
                <View style={styles.weaknessTypes}>
                    <Image style={styles.image} source={Water} />
                    <Image  style={styles.image} source={Rock} />
                    <Image  style={styles.image} source={Earth} />
                </View>
            </View>
            <TrainingData />
        </View>
    )
}

export default Data