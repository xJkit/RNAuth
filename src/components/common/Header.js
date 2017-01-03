import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const Header = props => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerTitle}</Text>
  </View>
);

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};

const styles = {
  textStyle: {
    fontSize: 36,
    color: 'black',
    margin: 20,
  },
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    elevation: 2,
    position: 'relative',
  }
};

export default Header;
