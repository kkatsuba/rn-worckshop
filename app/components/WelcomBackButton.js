import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const WelcomBackButton = ({ onPress }) => (
  <View style={[{ flex: 1 }, styles.backButtonContainer]}>
    <TouchableOpacity onPress={onPress}>
      <Icon name="arrow-back" style={styles.backButton} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  backButtonContainer: {
    justifyContent: 'center'
  },
  backButton: {
    color: '#fff',
    paddingVertical: 10
  }
});

WelcomBackButton.propTypes = {
  onPress: PropTypes.func
};

export default WelcomBackButton;
