import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNavigator} from './StackNavigator';
import {colores} from '../themes/appTheme';
import {Platform, Text} from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const MenuTab = () => {
  return Platform.OS === 'ios' ? <TabIOS /> : <TabAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.BottomTabColor,
      }}
      screenOptions={({route}) => ({
        
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'documents-outline';
              // color = 'white';
              break;
            case 'TopTabNavigator':
              iconName = 'menu-outline';
              break;
            case 'StackNavigator':
              iconName = 'people-circle-outline';
              break;
          }
          return <Text style={{color}}><Icon name={iconName} size={25} ></Icon></Text>;
        },
      })}>
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={Tab1Screen}/>
      <BottomTabAndroid.Screen name="TopTabNavigator" options={{title: 'Tab 2'}} component={TopTabNavigator}/>
      <BottomTabAndroid.Screen name="StackNavigator" options={{title: 'StackNavigator'}} component={StackNavigator}/>
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();
const TabIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T122';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },

        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: '#000000',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}>
      <BottomTabIOS.Screen name="Tab1Screen" options={{title: 'Tab 1'}} component={Tab1Screen}/>
      <BottomTabIOS.Screen name="Tab2Screen" options={{title: 'Tab 2'}} component={TopTabNavigator}/>
      <BottomTabIOS.Screen name="StackNavigator" options={{title: 'StackNavigator'}} component={StackNavigator}/>
    </BottomTabIOS.Navigator>
  );
};