import React from 'react';
import { Image,
		 Text,
		 SectionList,
		 StyleSheet,
		 View, 
		 SafeAreaView
	} from 'react-native';
import Constants from "expo-constants";

const QUESTIONS = [
	{
		title:"Q1",
		data:["Yes","No"]
	},
	{
		title:"Q2",
		data:["Yes","No"]
	},
	{
		title:"Q3",
		data:["Yes","No"]
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const Test = () => (
	<SafeAreaView style={styles.container}>
		<SectionList
			sections={QUESTIONS}
			keyExtractor={(item,index) => item + index}
			renderItem={({ item }) => <Item title={item} />}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={styles.header}>{title}</Text>
			)}
		/>
	</SafeAreaView>		
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});


export default Test;

