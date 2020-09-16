import React, { Component } from 'react';
import { Button, StyleSheet, Text, SafeAreaView }
  from 'react-native';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';


class LoginScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Hello there, mate. </Text>
  
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </SafeAreaView>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems:'center',
    justifyContent:'center',
  },
  text: { 
    color:'#FFF', 
    fontSize:24, 
    marginHorizontal:10, 
    marginBottom:5,
    marginTop:24,
  },
})