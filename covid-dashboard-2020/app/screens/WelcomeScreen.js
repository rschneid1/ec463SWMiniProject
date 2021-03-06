import React              from 'react';
import { StatusBar }      from 'expo-status-bar';
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text,
                        } from 'react-native';
import firebase           from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '../../config';
import * as WebBrowser    from 'expo-web-browser';
import * as Google        from 'expo-auth-session/providers/google';

import background         from '../assets/abstract_background.jpg'

// Initialize Firebase
//// https://docs.expo.io/guides/using-firebase/#user-authentication
//// https://docs.expo.io/versions/latest/sdk/google/
if ( !firebase.apps.length ) { 
  firebase.initializeApp(firebaseConfig); 
}

// https://docs.expo.io/guides/authentication/#google
WebBrowser.maybeCompleteAuthSession();

var userID;
export default function WelcomeScreen( {navigation} ) {  
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest( { 
    clientId: '467420770701-jvmc15drmmrh1ng1kn4vnl1v3943spma.apps.googleusercontent.com',
    }
  )

  React.useEffect( ()=> {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  React.useEffect( ()=> {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
		    userID = user.email;
		    const usersRef = firebase.firestore().collection('users');
		    if ( usersRef.doc(userID).get() ) {
			    var docRef = usersRef.doc(userID);
			    docRef.get().then( function(doc) {
				    var admin = doc.get('admin1');
				    console.log(admin);
				    if (admin == 1) { navigation.navigate('AdminDashboard'); }
			    })
		    }
        navigation.navigate('Dashboard');
      }
    })
  })

  const imgW = 360, 
        imgH = 180;

  return (
    <ImageBackground style={styles.background} resizeMode="cover" source={background}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        <Image source={{width:imgW, height:imgH, uri:`https://picsum.photos/${imgW}/${imgH}`}}/>

        <Text style={styles.welcome}> COVID-19 {"\n"} Daily Dashboard </Text>

        <Button title = "Login with Google" onPress={()=> { promptAsync(); } } />

        <Text style={styles.copyright} > Created by Shazor Shahid and Ryan Schneider </Text>

      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: 
  { flex:1, alignItems:'center', justifyContent:'center',
  },
  welcome: 
  { textAlign:'center', color:'#222', fontSize:32,marginBottom:10, marginTop:10, fontFamily:'Trebuchet MS',
  },
  loginButton: 
  { backgroundColor:'dodgerblue', padding:6, borderRadius:5, marginTop:10, width:"24%", alignItems:'center',
  },
  buttonText: 
  { textAlign:'center', fontSize:20, color:'#FFF', 
  },
  background: 
  { flex:1, width:'100%', height:'100%',
  },
  copyright: 
  { justifyContent: 'center', textAlign: 'center', fontSize: 10, fontStyle: 'italic',
  }

})