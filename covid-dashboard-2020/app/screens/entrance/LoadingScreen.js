import React, { Component } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet }
  from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
        this.props.navigation.navigate('Dashboard');
      } else {
        this.props.navigation.navigate('Login');
      }
    }.bind(this))
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large"/>
      </SafeAreaView>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
});