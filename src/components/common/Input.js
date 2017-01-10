import React, { PropTypes } from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const { containerStyle, labelStyle, TextInputStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={TextInputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 40,
    width: null,
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
  },
  TextInputStyle: {
    flex: 4,
    height: 28,
    width: null,
    fontSize: 16,
    alignSelf: 'center',
  },
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
