import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen      from './app/screens/entrance/WelcomeScreen';
import LoadingScreen      from './app/screens/entrance/LoadingScreen';
import Dashboard          from './app/screens/Dashboard';
import StatisticsScreen   from './app/screens/StatisticsScreen';

// Initialize Firebase
//// https://docs.expo.io/guides/using-firebase/#user-authentication
//// https://docs.expo.io/versions/latest/sdk/google/

// Making an admin access account through Firebase
//// https://firebase.google.com/docs/admin/setup

// https://reactnavigation.org/docs
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome"    component={WelcomeScreen} />
        <Stack.Screen name="Loading"    component={LoadingScreen} />
        <Stack.Screen name="Dashboard"  component={Dashboard} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
