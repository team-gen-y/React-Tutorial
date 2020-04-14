import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default LoginScreen = (props) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate("HomeScreen");
                }}
            >
                <Text style={{ fontSize: 40 }}>
                    Click Me
                </Text>
            </TouchableOpacity>
        </View>
    );
}