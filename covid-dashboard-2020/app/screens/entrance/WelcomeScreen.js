import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity } 
  from 'react-native';

import background from '../../assets/abstract_background.jpg'

const imgW = 360;
const imgH = 180;

class WelcomeScreen extends Component {

  render() {
    return (
      <ImageBackground style={styles.background} resizeMode="cover" source={background}>

        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />

          <TouchableHighlight onPress={() => console.log("Image pressed")}> 
            <Image blurRadius={0} source={{width:imgW, height:imgH, uri:`https://picsum.photos/${imgW}/${imgH}`}} />
          </TouchableHighlight>
          
          <Text style={styles.welcome}> Welcome to </Text>
          <Text style={styles.appName}> COVID-19 Daily Tracker </Text>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login') } style={styles.loginButton}>
            <Text style={styles.buttonText}> Login </Text>  
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup') } style={styles.signupButton}>
            <Text style={styles.buttonText}> Sign-up </Text>  
          </TouchableOpacity>

          {/* <Text style={styles.buttonText}>Current Time: {new Date().toLocaleTimeString()}</Text> */}

        </SafeAreaView>
      </ImageBackground>
    )  
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { 
    flex:1, 
    alignItems:'center', 
    justifyContent:'center',
  },
  welcome: { 
    color:'#222', 
    fontSize:24, 
    marginHorizontal:10, 
    marginBottom:5,
    marginTop:24,
  },
  appName: { 
    color:'#222', 
    fontSize:32, 
    marginHorizontal:10, 
    marginBottom:10,
    marginTop:0,
    fontFamily:'Trebuchet MS',
  },
  loginButton: { 
    backgroundColor:'dodgerblue', 
    padding:6, 
    borderRadius:5,
    marginTop:10, 
    width:"24%",
    alignItems:'center',
  },
  signupButton: {
    backgroundColor:'darkred', 
    padding:6, 
    borderRadius:5, 
    marginTop:4,
    width:"24%",
    alignItems:'center',
  },
  buttonText: { 
    fontSize:20, 
    color:'#FFF',
  },
  background: {
    flex:1,
    width:'100%',
    height:'100%',
  },
})