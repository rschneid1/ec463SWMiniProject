import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet }
  from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends React.Component {
  
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