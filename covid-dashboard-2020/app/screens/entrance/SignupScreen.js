import React, { Component } from 'react';
import firebase from 'firebase';


class SignupScreen extends Component {
  handlerSignUp = () => {
      const { email, password } = this.state
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(()=> this.props.navigation.navigate('Dashboard'))
        .catch(error => console.log(error))
  }

  render() {
    return (

      <Button title="Sign In with Google" onPress={this.handlerSignUp}/>

    )
  }
}

export default SignupScreen;