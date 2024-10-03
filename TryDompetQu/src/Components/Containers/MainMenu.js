import { Button, View, Text, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default Login = () => {
    const navigation = useNavigation()
    return (
        <View >
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Back"
                onPress={() => navigation.canGoBack() ? navigation.goBack() : BackHandler.exitApp()}
            />
        </View>
    )
}

