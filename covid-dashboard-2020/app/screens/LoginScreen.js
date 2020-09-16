import React from 'react';
import { Button, StyleSheet, Text, View }
  from 'react-native';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';
/*
// import 'firebase/auth';

// Initialize Firebase
// https://docs.expo.io/guides/using-firebase/#user-authentication
// https://docs.expo.io/versions/latest/sdk/google-sign-in/

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  projectId: "project-id",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);
*/

export default function LoginScreen( {navigation} ) {
  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text> Hello there, mate. </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    // backgroundColor: '#003f5c',
    alignItems:'center',
    justifyContent:'center',
  }
})