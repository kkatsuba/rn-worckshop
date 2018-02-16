
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/Login';
import SignUp1 from '../screens/SignUp/SignUpStep1';
import SignUp2 from '../screens/SignUp/SignUpStep2';
import Welcom from '../screens/Welcom/Welcom';

export default StackNavigator({
  Welcom: {
    screen: Welcom,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen
  },
  SignUp1: {
    screen: SignUp1
  },
  SignUp2: {
    screen: SignUp2
  }
}, {
  title: null,
  navigationOptions: {
    header: null
  }
});
