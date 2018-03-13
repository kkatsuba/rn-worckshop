import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { Input, Item, Icon, Container, Form } from 'native-base';
import Spinner from '../../components/Spinner';
import { logIn } from '../../actions/auth';
import styles from './styles';
import WelcomBackButton from '../../components/WelcomBackButton';

class LoginScreen extends Component {
  state = {
    email: null,
    password: null
  }

  emailChange = (email) => {
    this.setState({ email });
  }

  passChange = (password) => {
    this.setState({ password });
  }

  logIn = () => {
    this.props.dispatch(logIn(this.state.email, this.state.password));
  }

  render() {
    const { error, isFetching, navigation } = this.props;
    return (
      <Container style={styles.container}>
        {isFetching && <Spinner />}
        <WelcomBackButton onPress={() => this.props.navigation.goBack()} />
        <View style={{ flex: 1 }}>
          <Text style={styles.titleText}>Log In</Text>
        </View>
        <View style={{ flex: 3 }}>
          <Form>
            <Item style={styles.inputItem}>
              <Icon name="md-person" style={styles.inputIcon} />
              <Input
                placeholder="Email"
                placeholderTextColor="#71757f"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                value={this.state.email}
                onChangeText={this.emailChange}
                onSubmitEditing={() => {
                  this.passwordInput._root.focus();
                }}
              />
            </Item>
            <Item style={styles.inputItem}>
              <Icon name="md-lock" style={styles.inputIcon} />
              <Input
                placeholder="Password"
                placeholderTextColor="#71757f"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                returnKeyType="go"
                value={this.state.password}
                ref={ref => this.passwordInput = ref}
                onChangeText={this.passChange}
                onSubmitEditing={this.logIn}
              />
            </Item>
            {error &&
              <Text style={styles.errorMessage}>{error}</Text>
            }
            <TouchableOpacity style={styles.buttonContainer} onPress={this.logIn}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </Form>
        </View>
      </Container>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.any,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func
};

const mapStateToProps = state => ({
  isFetching: state.auth.isFetching,
  error: state.auth.error ? state.auth.error.message : null
});

export default connect(mapStateToProps)(LoginScreen);
