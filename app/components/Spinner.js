import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner as SpinnerNB } from 'native-base';

const Spinner = ({ color, text }) => (
  <View style={styles.container}>
    <SpinnerNB color={color} />
    {text && <Text style={styles.text}>{text}</Text>}
  </View>
);

Spinner.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {

  }
});

export default Spinner;
