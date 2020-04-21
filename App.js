import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/SplashScreen';
import Store from './src/Store';
import { Observer } from 'mobx-react';
import HomeScreen from './src/HomeScreen';

export default App = () => {
  const StackNavigator = createStackNavigator();

  return (
    <NavigationContainer>
      <Observer>
        {
          () => (
            <StackNavigator.Navigator>
              {Store.screen == 0 ?
                <StackNavigator.Screen component={SplashScreen} name="Splash" options={{ headerShown: false }} /> :
                <StackNavigator.Screen component={HomeScreen} name="Home" />}
            </StackNavigator.Navigator>
          )
        }
      </Observer>
    </NavigationContainer>
  );
}