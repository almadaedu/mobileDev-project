import { View, Text, Image } from 'react-native'
import React from 'react'
import useStyles from '../styles'

const TrainingData = () => {
    const styles = useStyles()
    return (
        <View>
            <Text style={styles.infoTitle}>Treinamento</Text>
            <View style={styles.data}>
                <View>
                    <Text style={styles.infoText}>Pontos de esforço</Text>
                    <Text style={styles.infoText}>Taxa de captura</Text>
                    <Text style={styles.infoText}>Amizade base</Text>
                    <Text style={styles.infoText}>Experiência base</Text>
                    <Text style={styles.infoText}>Taxa de crescimento</Text>
                </View>
                <View style={styles.infoAnswersTraining}>
                    <Text style={styles.infoAnswers}>1 Velocidade</Text>
                    <Text style={styles.infoAnswers}>45 (5.9% com Pokébola)</Text>
                    <Text style={styles.infoAnswers}>70 (normal)</Text>
                    <Text style={styles.infoAnswers}>62</Text>
                    <Text style={styles.infoAnswers}>Médio Devagar</Text>
                </View>
            </View>
        </View>
    )
}

export default TrainingData