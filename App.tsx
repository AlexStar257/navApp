import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {StackNavigator} from './src/navigator/StackNavigator';
import {MenuLateralBasico} from './src/navigator/MenuLateralBasico';
import {MenuTab} from './src/navigator/MenuTab';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuTab /> */}
      <MenuLateralBasico />
    </NavigationContainer>
  );
};
export default App;
