import React from 'react';
import { StyleSheet, Text, View }
  from 'react-native';
  import firebase from 'firebase';
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

export default class LoginScreen extends React.Component {
  render() {
    return (
      <Text style={styles.textStyle}>LoginScreen</Text>
      /* Firebase Code Here */
    
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems:'center',
    justifyContent:'center',
  }
})