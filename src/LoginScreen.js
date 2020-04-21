import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Dimensions, Image, ActivityIndicator, Linking } from 'react-native';
import Store from './Store';
import { TouchableOpacity, FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Observer } from 'mobx-react';
import Axios from 'axios';
import { fontCustomSize } from './common/font';

export default LoginScreen = (props) => {

    const [listData, setListData] = useState()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2719918152a7463492d900316ee90bf1").then(res => {
            var temp = [];
            res.data.articles.forEach((eachArt, index) => {
                temp.push(eachArt);
            })
            setLoading(false);;
            setListData(temp);
        })
    }, [])

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            {loading ? <ActivityIndicator size={"large"} color="#450" style={{ alignSelf: 'center', height: Dimensions.get("window").height / 2 }} /> : (<FlatList
                data={listData}
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
            />)}
        </View>
    );
}