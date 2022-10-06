import { StyleSheet } from "react-native";
import { textColor, customColor } from '../assets/styles/colors';
const useStyles = () => {
    return StyleSheet.create({
    container: {
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: '700'
    },
    subHeading: {
        fontSize: 16,
        marginTop: 10,
        color: textColor.grey,
    },
    
    })
}

export default useStyles