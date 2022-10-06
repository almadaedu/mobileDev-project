//#region Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
//#endregion
const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    )
}

export default Routes