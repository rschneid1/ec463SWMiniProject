import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } 
  from 'react-native'

import firebase from 'firebase/app';
import 'firebase/auth';

var name, email, photoURL, provider, id;

firebase.auth().onAuthStateChanged( user => {
  if (user) {
    name      = user.displayName;
    email     = user.email;
    photoURL  = user.photoURL;
    provider  = user.providerId;
    
    console.log(name, email, provider);
  } else { console.log("Signed out."); }
})

class Dashboard extends React.Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}> Welcome, { name } </Text>
        <Image style={styles.profilePicture} source={{ uri: photoURL }} />

        <Button title="Daily Symptom Tracker" onPress={ ()=> {this.props.navigation.navigate('SymptomTest') } } />
        <Button title="COVID-19 Statistics" onPress={ ()=> { this.props.navigation.navigate('Statistics') } } />

        <TouchableOpacity onPress={ ()=> { firebase.auth().signOut().then( this.props.navigation.push('Welcome') ) } } 
            style={styles.loginButton}>
          <Text style={styles.buttonText}> Logout </Text>
        </TouchableOpacity>

        <Text>Email: {email} authenticated with {provider} </Text>
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
  profilePicture:
  { width:'10%', height:'10%', resizeMode:'contain', marginTop:10, marginBottom:10,
  },

})