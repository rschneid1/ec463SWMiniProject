import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity,View,Button} from 'react-native'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

var name, email, photoURL, signedInWith, userID;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user.providerData.forEach(function (profile) {
      name = profile.displayName;
      email = profile.email;
      photoURL = profile.photoURL;
      signedInWith = profile.providerId;
	  userID = profile.email;
	  
	  // firestore user details
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
	  //console.log(userID);
	  if (!usersRef.doc(userID).get()){
		usersRef.doc(userID).set(data);
	  }
	  usersRef.doc(userID).update(data);
	  
    })
  } else { console.log("No user signed in or Authentication failed."); }
})

const Separator = () => (
	<View style={styles.separator} />
);

class Dashboard extends React.Component {

  render() {
    return (
      
      <SafeAreaView style={styles.container}>
		<View>
			<Text style={styles.title}>
				Welcome , { name }
			</Text>
		</View>
		<Separator />
		<View>
			<Button
				title="Fill out Symptom Test"
				onPress={() => 
					this.props.navigation.push('CovidTest')
				}
			/>
		</View>
        
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
  separator: {
	marginVertical: 8,
	borderBottomColor: '#737373',
	borderBottomWidth: StyleSheet.hairlineWidth,
  },
})