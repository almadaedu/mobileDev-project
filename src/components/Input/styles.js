//#region Imports
import { StyleSheet } from "react-native";
import { customColor } from "../../assets/styles/colors";
//#endregion

const useStyles = () => {
    return StyleSheet.create({
    input: {
        paddingLeft: 10,
        width: 244,
        height: 50,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        height: 50,
        backgroundColor: customColor.input,
        borderRadius: 10,
        justifyContent: 'space-between'
    },

    })
}

export default useStyles