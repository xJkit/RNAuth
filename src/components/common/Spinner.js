import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
  <View style={styles.indicatorStyle}>
    <ActivityIndicator
      animating
      size={size || 'large'}
    />
  </View>
);

const styles = {
  indicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Spinner;
