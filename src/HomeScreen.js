import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default HomeScreen = (props) => {
    return (
        <View>
            <Text style={{ fontSize: 40 }}> Data is {props.route.params.valueKey + ""}</Text>
        </View>
    );
}