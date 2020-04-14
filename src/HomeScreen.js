import React from 'react';
import { View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default HomeScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableNativeFeedback
                onPress={() => {
                    navigation.navigate("ThirdScreen");
                }}
                background={TouchableNativeFeedback.Ripple("#000")}
            >
                <View style={{ padding: 10, elevation: 2, backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 40 }}>
                        Click Me
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
}