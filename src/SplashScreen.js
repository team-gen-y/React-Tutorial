import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import Axios from 'axios';
import LottieView from 'lottie-react-native';
import Store from './Store'
export default SplashScreen = (props) => {

    useEffect(() => {
        this.animation.play();
        Axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2719918152a7463492d900316ee90bf1").then(res => {
            console.log(res.data);
            Store.data = res.data;
            Store.screen = 1;
        })
    })

    resetAnimation = () => {
        this.animation.reset();
        this.animation.play();
    };


    return (<View style={{ backgroundColor: "black" }}>
        <StatusBar backgroundColor="black" />
        <LottieView
            ref={animation => {
                this.animation = animation;
            }}
            style={{
                alignSelf: 'center',
                width: "100%",
                height: "100%",
            }}
            source={require("../assets/lottie/loading.json")}
        />
    </View>);
}