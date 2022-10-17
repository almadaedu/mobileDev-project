//#region Imports
import { StyleSheet } from "react-native";
import { backgroundColors, textColor } from '../../assets/styles/colors';
//#endregion
const useStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: backgroundColors.welcomeBackground,
            padding: 20,
        },
        header: {
            paddingVertical: 10,
            height: '20%',
        },
        upperText: {
            color: textColor.rockWhite,
        },
        subText: {
            fontSize: 42,
            fontWeight: '700',
            color: textColor.goldYellow,
        },
        main: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 10,
            height: '45%',
        },
        footer: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '40%',
        },
        button: {
            backgroundColor: backgroundColors.goldYellow,
            width: '100%',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 20
        },
        buttonText: {
            fontSize: 24,
            fontWeight: '700',
            color: textColor.darkBlue,
        }
    })
}

export default useStyles