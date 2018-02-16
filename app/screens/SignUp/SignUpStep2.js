import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input, Item, Icon, Container, Form } from 'native-base';
import { connect } from 'react-redux';
import { signUp } from '../../actions/auth';
import Spinner from '../../components/Spinner';
import styles from './styles';

class SignUpStep2 extends Component {
  state = {
    password1: null,
    password2: null,
    error: null
  }

  passChange(password, ind) {
    this.setState({
      [`password${ind}`]: password
    });
  }

  signUp = () => {
    const { password1, password2 } = this.state;
    const { email, name } = this.props.navigation.state.params;

    if (password1 !== password2) {
      this.setState({
        error: 'Passwords are\'n equal'
      });
      return;
    }

    if (password2.length < 6) {
      this.setState({
        error: 'Password must be greater then 6 symbols'
      });
      return;
    }

    this.props.dispatch(signUp(email, password2, name));
  }

  render() {
    const { error, isFetching, navigation } = this.props;
    return (
      <Container style={styles.container}>
        {isFetching && <Spinner />}
        <View style={[{ flex: 1 }, styles.backButtonContainer]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" style={styles.backButton} />
          </TouchableOpacity>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.titleText}>Create{'\n'}password</Text>
          <Text style={styles.stepText}>2/2{'\n'}Steps</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Form>
            <Item style={styles.inputItem}>
              <Icon name="md-lock" style={styles.inputIcon} />
              <Input
                placeholder="Password"
                placeholderTextColor="#71757f"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                returnKeyType="next"
                value={this.state.password}
                ref={ref => this.passwordInput = ref}
                onChangeText={(e) => this.passChange(e, 1)}
                onSubmitEditing={() => {
                  this.repeatPasswordInput._root.focus();
                }}
              />
            </Item>
            <Item style={styles.inputItem}>
              <Icon name="md-lock" style={styles.inputIcon} />
              <Input
                placeholder="Repeat Password"
                placeholderTextColor="#71757f"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                returnKeyType="go"
                value={this.state.password}
                ref={ref => this.repeatPasswordInput = ref}
                onChangeText={(e) => this.passChange(e, 2)}
                onSubmitEditing={this.signUp}
              />
            </Item>
            {error &&
              <Text style={styles.errorMessage}>{error}</Text>
            }
            <TouchableOpacity style={styles.buttonContainer} onPress={this.signUp()}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </Container>
    );
  }
}

SignUpStep2.propTypes = {
  error: PropTypes.string,
  navigation: PropTypes.any,
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error ? state.auth.error.message : null
});

export default connect(mapStateToProps)(SignUpStep2);
