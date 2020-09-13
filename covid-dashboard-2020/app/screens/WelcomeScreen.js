import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } 
  from 'react-native';

import background from '../assets/background.jpg'

var imgW = 640;
var imgH = 240;
const handlePress = () => console.log("Text pressed");

function WelcomeScreen(props) {
  return (
    <ImageBackground style={styles.background} resizeMode="cover" source={background}  >

      <SafeAreaView style={styles.container} >
        
        <StatusBar style="auto" />
        
        <TouchableHighlight onPress={() => console.log("Image pressed")}> 
          <Image blurRadius={0} source={{ width:imgW, height:imgH, uri:`https://picsum.photos/${imgW}/${imgH}`}} />
        </TouchableHighlight>
        
        <Text style={styles.welcome} onPress={handlePress}> Welcome to the COVID-19 Dashboard 2020 </Text>
        

        <TouchableOpacity onPress={() => alert("pressed")} style={styles.button}>
          <Text style={styles.buttonText}> button </Text>  
        </TouchableOpacity>
        
        <div>
          <Text style={styles.buttonText}>Current Time: {new Date().toLocaleTimeString()}</Text>
        </div>  
        
        {/* ReactDom.render(element, document.getElementById('root')); */}
        {/* <TextInput style={{height:24, borderColor:'red', borderWidth: 2}} defaultValue="What is your name?" /> */}
      </SafeAreaView>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { 
    flex:1, 
    alignItems:'center', 
    justifyContent:'center',
  },
  welcome: { 
    color:'#FFF', 
    fontSize:24, 
    marginHorizontal:16, 
    marginBottom:24,
    marginTop:24,
    fontFamily:'Trebuchet MS',
  },
  button: { 
    backgroundColor:'gray', 
    padding:20, 
    borderRadius:5, 
  },
  loginButton: {
    width:"25%",
    height: 70,
    backgroundColor:"#fc5c65",
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