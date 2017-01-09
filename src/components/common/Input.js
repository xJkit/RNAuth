import React, { PropTypes } from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      style={styles.TextInputStyle}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 18,
    lineHeight: 28,
    flex: 1,
  },
  TextInputStyle: {
    flex: 4,
    height: 28,
    width: null,
  },
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChangeText: PropTypes.func.isRequired,
};

export default Input;
