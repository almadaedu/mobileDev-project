//#region Imports
import { StyleSheet } from "react-native";
import { backgroundColors, textColor } from '../../assets/styles/colors';
//#endregion
const useStyles = () => {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColors.welcome,
        padding: 20,
    },
    header: {
        marginTop: 30,
    },
    upperText: {
        color: textColor.rockWhite,
        marginBottom: 10
    },
    subText: {
        color: textColor.yellow,
        fontSize: 42,
        fontWeight: '700'
    },
    main: {

    },
    footer: {
    }

    
    })
}

export default useStyles