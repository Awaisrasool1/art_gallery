import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../../screen/auth/SignIn';
import SignUp from '../../screen/auth/SignUp';
import LoginStart from '../../screen/auth/LoginStart';
import Home from '../../screen/home/Home';
import NavigationDrawer from '../drawerNavigation/NavigationDrawer';

export default function NavigationStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="LoginStart"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginStart" component={LoginStart} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="NavigationDrawer" component={NavigationDrawer} />
    </Stack.Navigator>
  );
}
