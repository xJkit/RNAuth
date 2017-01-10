import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    account: null,
    password: null,
    errMsg: '',
    isLoading: false,
  }

  onBtnPress() {
    const { account, password } = this.state;
    this.setState({
      errMsg: '',
      isLoading: true,
    });

    firebase.auth().signInWithEmailAndPassword(account, password)
      .then(() => this.onLoginSuccess())
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(account, password)
          .then(() => this.onLoginSuccess())
          .catch(() => this.onLoginFail());
      });
  }

  onLoginSuccess() {
    this.setState({
      isLoading: false,
      account: '',
      password: '',
      errMsg: '',
    });
  }

  onLoginFail() {
    this.setState({
      isLoading: false,
      password: '',
      errMsg: 'Login Failed',
    });
  }

  renderButton() {
    if (this.state.isLoading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={() => this.onBtnPress()}>
        Log In
      </Button>
    );
  }

  render() {
    const { account, password, errMsg } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label="帳號"
            value={account}
            onChangeText={email => this.setState({ account: email })}
            placeholder="user@gmail.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="密碼"
            value={password}
            onChangeText={pwd => this.setState({ password: pwd })}
            placeholder="enter your password"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errTextStyle}>{errMsg}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export default LoginForm;
