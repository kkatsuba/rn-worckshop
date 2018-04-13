import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import { isSignedIn } from '../services/auth';
import { signInValidated } from '../actions/auth';
import MainStack from './MainStack';

const createRootNavi = (isSignedIn = false) => (
  StackNavigator({
    AuthStack: {
      screen: AuthStack,
    },
    MainStack: {
      screen: MainStack
    }
  }, {
    headerMode: 'none',
    initialRouteName: isSignedIn ? 'MainStack' : 'AuthStack'
  })
);

class RootNavigator extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    isSignIn: PropTypes.bool,
    isSignInValidated: PropTypes.bool
  };

  componentDidMount() {
    isSignedIn().then(res => {
      this.props.dispatch(signInValidated(res));
    });
  }

  render() {
    if (!this.props.isSignInValidated) return null;

    const Root = createRootNavi(this.props.isSignIn);

    return <Root />;
  }
}

const mapStateToProps = state => ({
  isSignInValidated: state.auth.isSignInValidated,
  isSignIn: state.auth.isSignIn
});

export default connect(mapStateToProps)(RootNavigator);
