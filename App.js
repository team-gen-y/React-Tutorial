import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';

const StackNavigator = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen component={LoginScreen} name="LoginScreen" />
        <StackNavigator.Screen component={HomeScreen} name="HomeScreen" />
        <StackNavigator.Screen component={LoginScreen} name="ThirdScreen" />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}