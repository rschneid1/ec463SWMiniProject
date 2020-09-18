// import React from 'react';
// import { ActivityIndicator, SafeAreaView, StyleSheet }
//   from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/auth';


// class LoadingScreen extends React.Component {
//   componentDidMount() {
//     this.checkIfLoggedIn();
//   }

//   checkIfLoggedIn = ()=> {
//     firebase.auth().onAuthStateChanged(user => {
//       if(user) {
//         this.props.navigation.navigate('Dashboard');
//       } else { this.props.navigation.navigate('Welcome') }
//     })
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <ActivityIndicator size="large"/>
//       </SafeAreaView>
//     );
//   }
// }

// export default LoadingScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center',
//   },
// });