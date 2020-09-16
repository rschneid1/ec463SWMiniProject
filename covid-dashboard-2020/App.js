import React          from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase       from 'firebase';
import { firebaseConfig } from './config';

import WelcomeScreen  from './app/screens/entrance/WelcomeScreen';
import LoginScreen    from './app/screens/entrance/LoginScreen';
import SignupScreen   from './app/screens/entrance/SignupScreen';
import LoadingScreen  from './app/screens/entrance/LoadingScreen';


const Stack = createStackNavigator();

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
// https://docs.expo.io/guides/using-firebase/#user-authentication
// https://docs.expo.io/versions/latest/sdk/google-sign-in/


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        {/* <Stack.Screen name="Dashboard" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
