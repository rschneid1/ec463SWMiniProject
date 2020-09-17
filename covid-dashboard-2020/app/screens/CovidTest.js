import React from 'react';
import { Image,
		 Text,
		 StyleSheet,
		 Button,
		 View, 
		 SafeAreaView,
		 Alert,
	} from 'react-native';
import Constants from "expo-constants";

const Separator = () => (
  <View style={styles.separator} />
);

const Test = () => (
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
				<Button
					title="No"
					onPress={() => Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={() => Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
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
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Yes"
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
			</View>
		</View>
		<Separator />
			<View>
				<Button
					title="Submit"
					onPress={()=> Alert.alert('Simple Button pressed')}
				/>
			</View>
	</SafeAreaView>		
);

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
	


export default Test;

