//#region Imports
import { StyleSheet } from "react-native";
import {  colors } from '../../../assets/styles/colors';
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    infoTitle: {
        color: colors.grass,
        fontWeight: '700',
        fontSize: 16
    },
    data: {
        flexDirection: 'row'
    },
    info: {
        marginRight: 20
    },
    infoText: {
        margin: 10,
    },
    infoAnswers: {
        marginLeft: 20
    },
    weakness: {
        margin: 10,
        flexDirection: 'row',
        marginRight: 20
    },
    weaknessTypes: {
        flexDirection: 'row',
        marginLeft: 50,
        justifyContent: 'space-around'
    },
    image: {
        marginHorizontal: 5
    }

    })
}

export default useStyles