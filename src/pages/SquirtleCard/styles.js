//#region Imports
import { StyleSheet } from "react-native";
import { backgroundColors, colors, textColor } from '../../assets/styles/colors';
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColors.water
    },
    title: {
        color: textColor.white,
        fontSize: 16,
        fontWeight: '700'
    },
    containerHeader: {
        color: textColor.white,
        paddingVertical: 20,
        alignItems: 'center'
    },
    containerBody: {
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: backgroundColors.default,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    info: {
        marginTop: 28,
        marginBottom: 12,
        color: textColor.grey,
    }

    })
}

export default useStyles