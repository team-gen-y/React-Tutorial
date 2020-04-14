import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';

export default LoginScreen = (props) => {

    // const [stateName, setStateFuncName] = useState("default");
    const [text, setText] = useState(0);

    return (
        <View>
            <TextInput
                value={text + ""}
                onChangeText={res => {
                    console.log(res);
                    setText(res)
                }}
                style={{
                    fontSize: 40, backgroundColor: 'white',
                    borderBottomColor: "black", width: Dimensions.get("window").width, borderWidth: 1
                }} />

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("HomeScreen", { valueKey: text });
                }}
            >
                <Text style={{ fontSize: 40 }}>
                    Click Me
                </Text>
            </TouchableOpacity>


        </View>
    );
}