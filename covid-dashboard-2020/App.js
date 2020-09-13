import 'react-native-gesture-handler'
import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  projectId: "project-id",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
