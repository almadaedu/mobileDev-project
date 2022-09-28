//#region Imports
import { StyleSheet } from "react-native";
import { backgroundColors } from '../../assets/styles/colors';
//#endregion
const useStyles = () => {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColors.dragon
    }
    
    })
}

export default useStyles