import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity,View } 
  from 'react-native'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var name, email, photoURL, provider, userID;
firebase.auth().onAuthStateChanged( user => {
  if (user) {
    name      = user.displayName;
    email     = user.email;
    photoURL  = user.photoURL;
    provider  = user.providerId;
	  userID    = user.email;

    console.log(name, email, provider);

	  const data = {
		id: userID, 
		Q1: 0,
		Q2: 0,
		Q3:	0,
		Q4:	0,
		Q5:	0,
		Q6: 0,
		Q7: 0,
		Q8: 0
	  };
	  const usersRef = firebase.firestore().collection('users');
    console.log(userID);

		usersRef.doc(userID).set(data);
    usersRef.doc(userID).update(data);
    
  } else { console.log("Signed out."); }
})

const Separator = () => ( <View style={styles.separator} /> );

class Dashboard extends React.Component {

  render() {
    return (
      
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}> Welcome, { name } </Text>
        <Image style={styles.profilePicture} source={{ uri: photoURL }} />
        <Separator />
        <Button title="Daily Symptom Tracker" onPress={ ()=> {this.props.navigation.navigate('CovidTest') } } />
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
  separator: { 
	marginVertical: 8,
	borderBottomColor: '#737373',
	borderBottomWidth: StyleSheet.hairlineWidth,
  },
})