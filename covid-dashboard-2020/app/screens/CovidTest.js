import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View,
  } from 'react-native';
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

  } else { console.log("No sign in/Authentication failed."); }
})

const usersRef = firebase.firestore().collection('users');

const Separator = () => ( <View style={styles.separator} /> );

const answers = {
	Q1: 0,
	Q2: 0,
	Q3:	0,
	Q4:	0,
	Q5:	0,
	Q6: 0,
	Q7: 0,
	Q8: 0
}

class CovidTest extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.container}>
				<View>
					<Text style={styles.title}>
						Are you experiencing any of the following symptoms (Please Note: These questions pertain only to new symptoms that have arisen in the past 14 days.)
					</Text>
				</View>
				<Separator/>
				<View>
					<Text style={styles.title}>
						Fever of 100 F, or feeling unusually hot (if no thermometer available) accompanied by shivering/chills
					</Text>
					<View style={styles.fixToText}>
						<Button title="No" onPress={() => 
								answers.Q1 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={() => 
								answers.Q1 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						New cough not related to chronic condition
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q2 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q2 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						Difficulty breathing, Shortness of breath
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q3 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q3 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						Sore Throat
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q4 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q4 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						New loss of taste or smell
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q5 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q5 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						Vomiting
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q6 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q6 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						Severe fatigue
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q7 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q7 = 1
							}
						/>
					</View>
				</View>
				<Separator />
				<View>
					<Text style={styles.title}>
						Severe muscle aches
					</Text>
					<View style={styles.fixToText}>
						<Button
							title="No"
							onPress={()=> 
								answers.Q8 = 0
							}
						/>
						<Button
							title="Yes"
							onPress={()=> 
								answers.Q8 = 1
							}
						/>
					</View>
				</View>
				<Separator />
					<View>
						<Button title="Submit" onPress={()=> {usersRef.doc(userID).update(answers); this.props.navigation.push('Dashboard') } } />
					</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 16,
	},
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	separator: {
		marginVertical: 8,
		borderBottomColor: '#737373',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
});
	


export default CovidTest;

