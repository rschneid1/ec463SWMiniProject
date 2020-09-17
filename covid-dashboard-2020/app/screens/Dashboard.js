import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/auth';

var name, email, photoURL, signedInWith;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user.providerData.forEach(function (profile) {
      name = profile.displayName;
      email = profile.email;
      photoURL = profile.photoURL;
      signedInWith = profile.providerId;
    })
  } else { console.log("No user signed in or Authentication failed."); }
})

class Dashboard extends React.Component {

  render() {
    return (
      
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}> Welcome, { name } </Text>
        
        <TouchableOpacity onPress={() => { firebase.auth().signOut(); this.props.navigation.push('Welcome') } } style={styles.loginButton}>
          <Text style={styles.buttonText}> Logout </Text>
        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}

export default Dashboard;

const styles = StyleSheet.create({
  container: 
  { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  },
  loginButton: 
  { backgroundColor:'dodgerblue', padding:6, borderRadius:5, marginTop:10, width:"24%", alignItems:'center',
  },
  welcome: 
  { color:'#222', fontSize:24, marginHorizontal:10, marginBottom:5, marginTop:24,
  },
})