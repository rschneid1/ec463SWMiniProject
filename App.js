import React from 'react';
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firestore from '@react-native-firebase/firestore';

import WelcomeScreen      from './app/screens/entrance/WelcomeScreen';
import Dashboard          from './app/screens/Dashboard';
import CovidTest		  from './app/screens/CovidTest';
import AdminDashboard     from './app/screens/AdminDashboard';

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
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Welcome"    component={WelcomeScreen} />
        <Stack.Screen name="Dashboard"  component={Dashboard} />
        <Stack.Screen name="CovidTest"  component={CovidTest} />
		<Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

 //<Stack.Screen name="Statistics" component={StatisticsScreen} />