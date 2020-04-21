import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';


export default App = () => {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen component={LoginScreen} name="HomeScreen" />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}