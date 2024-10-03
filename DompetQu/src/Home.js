import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { View, Text, Button } from 'react-native'
import MainMenu from './Components/Containers/MainMenu.js'

import { LoadDB, LoadUser,LoadUserData } from './Store/Reducers/todosSlice.js'

export default Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(LoadDB());
        // dispatch(LoadUser());
        // dispatch(LoadUserData());
    }, []);
    return (
        <View >
            <Text>Home</Text>
            <MainMenu />
        </View>
    )
}

