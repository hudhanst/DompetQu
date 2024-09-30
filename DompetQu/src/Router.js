import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './Home'
import Login from './Login'

const Stack = createNativeStackNavigator()

export default Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* <Stack.Screen name="Home">
                {(props) => <Home {...props} extraData={someData} />}
            </Stack.Screen> */}
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

