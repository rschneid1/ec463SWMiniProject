import React, { Component } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity }
  from 'react-native';
import firebase from 'firebase';
import * as GoogleSignIn from 'expo-google-sign-in';

class LoginScreen extends Component {
  state = { email: "", password: "", errorMessage: null }
  handlerLogin = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
      this.props.navigation.navigate("Main");
    }).catch(error => this.setState({ errorMessage: error.message }));
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.errorMessage && ( <Text style={{color:'red'}}>{this.state.errorMessage}</Text> ) }
        <TextInput
            style={styles.inputBox}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder='Email'
            autoCapitalize='none'
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
          placeholder='Password'
          secureTextEntry={true}
        />
        
        <TouchableOpacity style={styles.button} onPress={this.handlerSignUp}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Don't have an account? Sign-up.</Text>
        </TouchableOpacity>
        <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
      </SafeAreaView>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: '#FFA611',
      borderColor: '#FFA611',
      borderWidth: 1,
      borderRadius: 5,
      width: 200
  },
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  }
})