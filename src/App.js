import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: null,
  }

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCc_MdukrWJEF1UwtT5buPV1mi5ttZVrS8',
      authDomain: 'auth-6c370.firebaseapp.com',
      databaseURL: 'https://auth-6c370.firebaseio.com',
      storageBucket: 'auth-6c370.appspot.com',
      messagingSenderId: '612097248292'
    };
    firebase.initializeApp(config);

    // check the loggedIn status
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
        console.log('you are loggin in');
      } else {
        this.setState({ loggedIn: false });
        console.log('you are logged out');
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return (
          <View>
            <Text>You Are Already Logged In!.</Text>
            <Button
              onPress={() => firebase.auth().signOut()}
              title="Log out"
            />
          </View>
        );
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerTitle="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
