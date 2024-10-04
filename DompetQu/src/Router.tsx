import { SafeAreaView, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Navigation from './Components/Layouts/Navigation/Navigation'
import Home from './Components/Pages/Home/Home'
import Statistic from './Components/Pages/Statistic/Statistic'
import Wallet from './Components/Pages/Wallet/Wallet'
import Menu from './Components/Pages/Menu/Menu'

import Login from './Components/Pages/Login/Login'


const Stack = createNativeStackNavigator()

const Router = () => {
    const isUserLogin = true
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    {/* 
                    <Stack.Screen name="Home">
                        {(props) => <Home {...props} extraData={someData} />}
                    </Stack.Screen> 
                    */}

                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Statistic" component={Statistic} />
                    <Stack.Screen name="Wallet" component={Wallet} />
                    <Stack.Screen name="Menu" component={Menu} />

                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>

                {isUserLogin ?
                    <Navigation />
                    : <></>
                }
            </NavigationContainer>
        </SafeAreaView >
    )
}

export default Router

