import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase';
import { firebaseConfig } from './config';

import WelcomeScreen  from './app/screens/entrance/WelcomeScreen';
import LoginScreen    from './app/screens/entrance/LoginScreen';
import LoadingScreen  from './app/screens/entrance/LoadingScreen';
import Dashboard      from './app/screens/Dashboard';

// Initialize Firebase
// https://docs.expo.io/guides/using-firebase/#user-authentication
// https://docs.expo.io/versions/latest/sdk/google/
// Making an admin access account through Firebase
// https://firebase.google.com/docs/admin/setup
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
