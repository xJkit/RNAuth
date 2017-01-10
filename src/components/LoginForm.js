import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = {
    account: null,
    password: null,
  }

  showResult() {
    const { account, password } = this.state;
    console.log(`帳號：${account}, 密碼：${password}`);
  }

  render() {
    const { account, password } = this.state;
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
        <CardSection>
          <Button onPress={() => this.showResult()}>
            Register
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
