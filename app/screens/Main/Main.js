import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { logOut } from '../../actions/auth';

class Main extends Component {
  render() {
    return (
      <View>
        <Text>Main screen</Text>
        <TouchableOpacity onPress={() => {
          this.props.dispatch(logOut());
        }}>
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null)(Main);
