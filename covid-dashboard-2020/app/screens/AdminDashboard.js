import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity,View,Button} from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firestore from '@firebase/firestore';
//import Histogram from 'react-native-histogram';

var name, email, photoURL, signedInWith, userID;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user.providerData.forEach(function (profile) {
      name = profile.displayName;
      email = profile.email;
      photoURL = profile.photoURL;
      signedInWith = profile.providerId;
	  userID = profile.email;
    })
  } else { console.log("No user signed in or Authentication failed."); }
})

const usersRef = firebase.firestore().collection('users');

const Separator = () => (
	<View style={styles.separator} />
);



class AdminDashboard extends React.Component {

  render() {
    return (
      
      <SafeAreaView style={styles.container} >
		<View>
			<Text style={styles.title}>
				ADMIN ACCOUNT , { name }
			</Text>
		</View>
		<Separator />
		
		
        <TouchableOpacity onPress={() => { firebase.auth().signOut(); this.props.navigation.push('Welcome') } } style={styles.loginButton}>
          <Text style={styles.buttonText}> Logout </Text>
        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}

export default AdminDashboard;

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