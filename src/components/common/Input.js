import React, { PropTypes } from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, TextInputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={TextInputStyle}
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 50,
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    paddingLeft: 20,
  },
  TextInputStyle: {
    flex: 4,
    fontSize: 16,
  },
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
