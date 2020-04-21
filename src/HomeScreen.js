import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Dimensions, Image } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Store from './Store';
import Axios from 'axios';

export default HomeScreen = ({ navigation }) => {
    const [data, setData] = useState("");


    return (
        <View style={{ padding: 20, flexDirection: 'column', flex: 1, backgroundColor: "white" }}>
            <Image source={{ uri: Store.userData.image }} style={{ borderRadius: 100, height: 100, marginTop: 50, width: 100, alignSelf: "center" }} />
            <Text style={{ marginTop: 20, fontSize: 20, alignSelf: 'center' }}>Name: {Store.userData.name}</Text>
        </View>
    );
}