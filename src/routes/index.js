//#region Imports
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import BulbasaurCard from '../pages/BulbasaurCard';
import CharmanderCard from '../pages/CharmanderCard';
import SquirtleCard from '../pages/SquirtleCard'
import { backgroundColors, textColor } from '../assets/styles/colors';
//#endregion
const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: '',
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: backgroundColors.background,
                    },
                }}
            />
            <Stack.Screen
                name="BulbasaurCard"
                component={BulbasaurCard}
                options={{
                    headerShadowVisible: false,
                    headerTitle: 'Bulbassauro',
                    headerTitleAlign: 'center',
                    headerTintColor: textColor.white,
                    headerStyle: {
                        backgroundColor: backgroundColors.grass,

                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color: textColor.white,
                    },
                }}
            />
            <Stack.Screen
                name="CharmanderCard"
                component={CharmanderCard}
                options={{
                    headerShadowVisible: false,
                    headerTitle: 'Charmander',
                    headerTitleAlign: 'center',
                    headerTintColor: textColor.white,
                    headerStyle: {
                        backgroundColor: backgroundColors.fire,

                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color: textColor.white,
                    },
                }}
            />
            <Stack.Screen
                name="SquirtleCard"
                component={SquirtleCard}
                options={{
                    headerShadowVisible: false,
                    headerTitle: 'Squirtle',
                    headerTitleAlign: 'center',
                    headerTintColor: textColor.white,
                    headerStyle: {
                        backgroundColor: backgroundColors.water,

                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color: textColor.white,
                    },
                }}
            />

        </Stack.Navigator>
    )
}

export default Routes