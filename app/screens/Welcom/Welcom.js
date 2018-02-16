import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Container, Button } from 'native-base';
import styles from './styles';

export default class Welcom extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} />
        <Text style={styles.welcomText}>Start{'\n'}your{'\n'}adventure</Text>
        <View>
          <Button rounded warning block large onPress={() => this.props.navigation.push('Login')}>
            <Text style={styles.buttonText}>Log in</Text>
          </Button>
          <View style={styles.helpTextContainer}>
            <Text style={styles.justText}>Do not have account?</Text>
            <TouchableOpacity onPress={() => this.props.navigation.push('SignUp1')}>
              <Text style={styles.justClicableText}>Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
