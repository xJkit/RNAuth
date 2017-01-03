import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {

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
  }

  render() {
    return (
      <View>
        <Header headerTitle="Authentication" />
        <Text>App compoment here!</Text>
      </View>
    );
  }
}

export default App;
