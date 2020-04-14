import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import Store from './Store';

export default HomeScreen = ({ navigation }) => {
    const [data, setData] = useState("");
    return (
        <View>
            <TextInput
                value={data + ""}
                onChangeText={res => {
                    Store.name = res;
                    setData(res);
                }}
                style={{
                    fontSize: 40, backgroundColor: 'white',
                    borderBottomColor: "black", width: Dimensions.get("window").width, borderWidth: 1
                }} />

            <TouchableOpacity
                onPress={() => {
                    navigation.pop();
                }}
            >
                <Text style={{ fontSize: 40 }}>
                    Back
                </Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 40 }}>{Store.data}</Text>
        </View>
    );
}