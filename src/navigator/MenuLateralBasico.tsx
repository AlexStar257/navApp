import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { MenuTab } from './MenuTab';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
    return (
        <Drawer.Navigator> 
            <Drawer.Screen name="Tabs" options={{title: 'Tabs'}} component={MenuTab} />
            <Drawer.Screen name="StackNavigator" options={{title: 'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}