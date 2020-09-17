import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity } 
        from 'react-native';
import background from '../../assets/abstract_background.jpg'

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../../config';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';


// Initialize Firebase
if(!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

// https://docs.expo.io/guides/authentication/#google
WebBrowser.maybeCompleteAuthSession();

export default function WelcomeScreen( {navigation} ) {  
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    { clientId: '467420770701-jvmc15drmmrh1ng1kn4vnl1v3943spma.apps.googleusercontent.com',
    },
  );

  React.useEffect( ()=> {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
      navigation.navigate('Dashboard');
    }
  }, [response]);

  const imgW = 360;
  const imgH = 180;

  return (
    <ImageBackground style={styles.background} resizeMode="cover" source={background}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Image source={{width:imgW, height:imgH, uri:`https://picsum.photos/${imgW}/${imgH}`}}/>
        
        <Text style={styles.welcome}> Welcome to </Text>
        <Text style={styles.appName}> COVID-19 Daily Dashboard </Text>
        
        <TouchableOpacity onPress={() => { promptAsync(); } } style={styles.loginButton}>
          <Text style={styles.buttonText}> Login with Google </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: 
  { flex:1, alignItems:'center', justifyContent:'center',
  },
  welcome: 
  { color:'#222', fontSize:24, marginHorizontal:10, marginBottom:5, marginTop:24,
  },
  appName: 
  { color:'#222', fontSize:32, marginHorizontal:10, marginBottom:10, marginTop:0, fontFamily:'Trebuchet MS',
  },
  loginButton: 
  { backgroundColor:'dodgerblue', padding:6, borderRadius:5, marginTop:10, width:"24%", alignItems:'center',
  },
  signupButton: 
  { backgroundColor:'darkred', padding:6, borderRadius:5, marginTop:4, width:"24%", alignItems:'center',
  },
  buttonText: 
  { fontSize:20, color:'#FFF', 
  },
  background: 
  { flex:1, width:'100%', height:'100%',
  },

})