import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {

  state = {
    text: '123',
  }

  render() {
    const { word } = this.state;
    return (
      <Card>
        <CardSection>
          <Text>{ word }</Text>
          <TextInput
            style={styles.textInputStyle}
            onChange={text => this.setState({ text })}
          />
        </CardSection>
        <CardSection>
          <Text>Password</Text>
        </CardSection>
        <CardSection>
          <Button>
            Register
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  textInputStyle: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
};

export default LoginForm;
