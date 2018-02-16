import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input, Item, Icon, Container, Form } from 'native-base';
import debounce from 'lodash/debounce';
import styles from './styles';

export default class SignUpStep1 extends Component {
  state = {
    email: null,
    name: null,
    error: null
  }

  nameChange = (name) => {
    this.setState({
      name,
      error: !name && 'Please provide your name'
    });
  }

  emailChange = (email) => {
    const isMatch = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email);
    this.setState({
      email,
      error: !isMatch && 'Provided email is wrong'
    });
  }

  signUp = () => {
    const { name, email, error } = this.state;
    if (error) {
      return;
    }

    this.props.navigation.push('SignUp2', {
      name, email
    });
  }

  render() {
    const error = this.state.error;
    const disabled = !!(error || (!this.state.name && !this.state.email));
    return (
      <Container style={styles.container}>
        <View style={[{ flex: 1 }, styles.backButtonContainer]}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" style={styles.backButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.titleText}>New{'\n'}Account</Text>
          <Text style={styles.stepText}>1/2{'\n'}Steps</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Form>
            <Item style={styles.inputItem}>
              <Icon name="md-lock" style={styles.inputIcon} />
              <Input
                placeholder="Name"
                placeholderTextColor="#71757f"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onChangeText={debounce(this.nameChange, 150)}
                onSubmitEditing={() => {
                  this.emailInput._root.focus();
                }}
              />
            </Item>
            <Item style={styles.inputItem}>
              <Icon name="md-person" style={styles.inputIcon} />
              <Input
                placeholder="Email"
                placeholderTextColor="#71757f"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="go"
                ref={ref => this.emailInput = ref}
                onChangeText={debounce(this.emailChange, 150)}
                onSubmitEditing={this.signUp}
              />
            </Item>
            {error &&
              <Text style={styles.errorMessage}>{error}</Text>
            }
            {/*
               https://github.com/facebook/react-native/issues/17105
               https://github.com/facebook/react-native/pull/17106
            */}
            <TouchableOpacity disabled={disabled}
              style={[styles.buttonContainer, { opacity: disabled ? .7 : 1 }]}
              onPress={this.signUp}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </Container>
    );
  }
}

SignUpStep1.propTypes = {
  navigation: PropTypes.any
};
