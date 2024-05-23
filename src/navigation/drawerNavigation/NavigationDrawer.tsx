import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../../screen/home/Home';
import LoginStart from '../../screen/auth/LoginStart';

export default function NavigationDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
    }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="LoginStart" component={LoginStart} />
    </Drawer.Navigator>
  );
}
