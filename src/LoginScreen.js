import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions } from 'react-native';
import Store from './Store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Observer } from 'mobx-react';

export default LoginScreen = (props) => {

    const [data, setData] = useState(0);

    return (
        <View>
            <TextInput
                value={data + ""}
                onChangeText={res => {
                    Store.data = res
                    setData(res);
                }}
                style={{
                    fontSize: 40, backgroundColor: 'white',
                    borderBottomColor: "black", width: Dimensions.get("window").width, borderWidth: 1
                }} />

            <Text style={{ fontSize: 40 }}>
                {Store.data}
            </Text>

            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("HomeScreen");
                }}
            >
                <Observer>
                    {
                        () => (
                            <Text style={{ fontSize: 40 }}>{Store.name}</Text>
                        )
                    }
                </Observer>
            </TouchableOpacity>
        </View>
    );
}