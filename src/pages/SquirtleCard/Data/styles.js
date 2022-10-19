//#region Imports
import { StyleSheet } from "react-native";
import {  colors, textColor } from '../../../assets/styles/colors';
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    infoTitle: {
        color: colors.water,
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 8
    },
    data: {
        flexDirection: 'row'
    },
    infoText: {
        margin: 10,
        fontWeight: '500'
    },
    infoAnswers: {
        margin: 10,
        color: textColor.grey,
    },
    infoAnswersData: {
        marginLeft: 60
    },
    infoAnswersTraining: {
        marginLeft: 10
    },
    weakness: {
        margin: 10,
        flexDirection: 'row',
        marginRight: 20
    },
    weaknessTypes: {
        flexDirection: 'row',
        marginLeft: 90,
        justifyContent: 'space-around'
    },
    image: {
        marginHorizontal: 5
    }

    })
}

export default useStyles