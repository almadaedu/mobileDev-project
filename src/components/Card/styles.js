//#region Imports
import { StyleSheet } from "react-native";
import { textColor } from '../../assets/styles/colors';
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    card: {
        marginVertical: 12,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    number: {
        fontSize: 12,
        fontWeight: '700',
        color: "rgba(23, 23, 27, 0.6)",
    },
    cardTitle: {
        fontSize: 26,
        color: textColor.white,
        fontWeight: '700'
    },
    imageContainer: {
        marginTop: -10,
        marginLeft: -10
    },
    imageBackground: {
        width: 100,
        height: 100,
        paddingRight: 10
    }, 
    image: {
        width: 100,
        height: 100 ,
    },
    tag: {
        flexDirection: 'row'
    }

    })
}

export default useStyles