import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Dimensions, Image, ActivityIndicator, Linking } from 'react-native';
import { TouchableOpacity, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import Axios from 'axios';
import { fontCustomSize } from './common/font';
import LottieView from 'lottie-react-native';
import Store from './Store';

export default HomeScreen = (props) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <FlatList
                data={Store.data.articles}
                renderItem={({ item }) => (<TouchableOpacity
                    onPress={() => {
                        Linking.openURL(item.url)
                    }}
                >
                    <View style={{ padding: 10, elevation: 3, margin: 10, backgroundColor: 'white' }}>
                        <Text style={{ fontFamily: "Bold", marginBottom: fontCustomSize(5) }}>{item.author}</Text>
                        {item.urlToImage == "" ? null : item.urlToImage == null ? null : <Image source={{ uri: item.urlToImage }} style={{ height: 150 }} />}
                        <Text style={{ fontFamily: "Bold", fontSize: fontCustomSize(12), marginTop: fontCustomSize(10) }}>{item.title}</Text>
                        <Text style={{ fontFamily: 'Medium', marginTop: fontCustomSize(10) }}>{item.description}</Text>
                    </View>
                </TouchableOpacity>)
                }
                keyExtractor={(item) => (item.title)}
            />
        </View>
    )
}