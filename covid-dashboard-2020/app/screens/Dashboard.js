import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity } 
  from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/auth';

var name, email, photoURL, provider;

firebase.auth().onAuthStateChanged( user => {
  if (user) {
    console.log("Retrieving user data.");

    name      = user.displayName;
    email     = user.email;
    photoURL  = user.photoURL;
    provider  = user.providerId;

  } else { console.log("Signed out."); }
})

class Dashboard extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}> Welcome, { name } </Text>
        <Image style={styles.profilePicture} source={{ uri: photoURL }} />

        <Button title="COVID-19 Statistics" onPress={ ()=> { this.props.navigation.navigate('Statistics') } } />

        <TouchableOpacity onPress={ ()=> { firebase.auth().signOut(); this.props.navigation.push('Welcome') } } 
            style={styles.loginButton}>
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
  profilePicture:
  { width:'10%', height:'10%', resizeMode:'contain', marginTop:10, marginBottom:10,
  },

})