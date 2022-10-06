//#region Imports
import { StyleSheet } from "react-native";
import { textColor } from '../../assets/styles/colors';
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    card: {
        marginVertical: 10,
        padding: 15,
        borderRadius: 10
    },
    cardTitle: {
        fontSize: 26,
        color: textColor.white,
        fontWeight: '700'
    },
    number: {
        fontSize: 12,
        fontWeight: '700',
        color: "rgba(23, 23, 27, 0.6)",
    },
    image: {
        width: 100,
        height: 100 ,
    }

    })
}

export default useStyles