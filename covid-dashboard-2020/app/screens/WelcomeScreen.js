import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity } 
  from 'react-native';

import background from '../assets/background.jpg'

const imgW = 360;
const imgH = 180;

export default function WelcomeScreen( {navigation} ) {
  return (

    <ImageBackground style={styles.background} resizeMode="cover" source={background}  >
      <SafeAreaView style={styles.container}>
        
        <StatusBar style="auto" />
        <TouchableHighlight onPress={() => console.log("Image pressed")}> 
          <Image blurRadius={0} source={{width:imgW, height:imgH, uri:`https://picsum.photos/${imgW}/${imgH}`}} />
        </TouchableHighlight>
        
        <Text style={styles.welcome}> Welcome to </Text>
        <Text style={styles.appName}> COVID-19 Daily Tracker </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('Login') } style={styles.loginButton}>
          <Text style={styles.buttonText}> Login </Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login') } style={styles.signupButton}>
          <Text style={styles.buttonText}> Sign-up </Text>  
        </TouchableOpacity>

        {/* <Text style={styles.buttonText}>Current Time: {new Date().toLocaleTimeString()}</Text> */}

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex:1, 
    alignItems:'center', 
    justifyContent:'center',
  },
  welcome: { 
    color:'#FFF', 
    fontSize:24, 
    marginHorizontal:10, 
    marginBottom:5,
    marginTop:24,
  },
  appName: { 
    color:'#FFF', 
    fontSize:32, 
    marginHorizontal:10, 
    marginBottom:10,
    marginTop:0,
    fontFamily:'Trebuchet MS',
  },
  loginButton: { 
    backgroundColor:'green', 
    padding:16, 
    borderRadius:3, 
    width:"20%",
    alignItems:'center',
  },
  signupButton: {
    backgroundColor:'dodgerblue', 
    padding:16, 
    borderRadius:3, 
    width:"20%",
    alignItems:'center',
  },
  buttonText: { 
    fontSize:24, 
    color:'#FFF',
  },
  background: {
    flex:1,
    width:'100%',
    height:'100%',
  },
})