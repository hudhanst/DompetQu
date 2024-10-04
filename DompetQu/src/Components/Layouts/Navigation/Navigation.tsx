import React from 'react'

import { useNavigation } from '@react-navigation/native'

import {
    View,
    Text,
    Dimensions
} from 'react-native'

import { Color, Measurement } from '../../../Theme'

import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
// import IconsFoundation from '@expo/vector-icons/Foundation'
// import IconsEntypo from '@expo/vector-icons/Entypo'

const Nav = () => {
    const Navigate = useNavigation()

    let ScreenHeight = Dimensions.get("window").height
    const NavHeightPercent = 8
    const ScreenPercentage = ScreenHeight * (1 / 100)
    const NavHeight = ScreenPercentage * NavHeightPercent
    // const MarginTopValue = ScreenHeight - (NavHeight + (ScreenPercentage * 0))

    const NavData = [
        {
            Name: 'Transaction',
            Icon: 'money-bill-transfer',
            Link: 'Home',
        },
        {
            Name: 'Statistic',
            Icon: 'chart-pie',
            Link: 'Statistic',
        },
        {
            Name: 'Wallet',
            Icon: 'wallet',
            Link: 'Wallet',
        },
        {
            Name: 'Menu',
            Icon: 'ellipsis',
            Link: 'Menu',
        },
    ]

    return (
        <View
            style={{
                width: '100%',
                height: NavHeight,
                borderColor: 'red',
                borderWidth: 0,
                // marginTop: MarginTopValue,
                bottom: 0,
                backgroundColor: Color.primary,
                position: 'absolute',
                zIndex: 100,
                flexDirection: 'row'
            }}
        >
            {NavData.map((item, index) => (
                <View
                    key={index}
                    style={{
                        padding: 0,
                        flex: 1,
                        // borderColor: 'red',
                        borderColor: Color.secondary,
                        borderWidth: 0,
                        borderLeftWidth: index === 0 ? 0 : 1,
                        // alignContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center'
                        // paddingLeft: ScreenPercentage
                    }}
                >
                    <FontAwesome6
                        name={`${item.Icon}`}
                        size={ScreenPercentage * 3.5}
                        color="green"
                        onPress={() => Navigate.navigate(`${item.Link}` as never)} //TODO
                    />
                </View>
            ))}
        </View >
    )
}

export default Nav