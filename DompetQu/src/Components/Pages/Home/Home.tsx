import { View, Text, Button } from 'react-native'

const Home = () => {
    return (
        <View>
            <Text>
                Homeasdasd
            </Text>
            <Button
                title='test'
                onPress={() => console.log(1)}
            />
        </View>
    )
}

export default Home