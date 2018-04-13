import { TabNavigator } from 'react-navigation';
import ImagesSelector from '../screens/ImagesSelector';
import MainImages from '../screens/MainImages';

export default TabNavigator({
  MainImages: {
    screen: MainImages
  },
  ImagesSelector: {
    screen: ImagesSelector,
    navigationOptions: ({ navigation }) => {
      const params = navigation.state.params;
      return {
        tabBarVisible: params && params.tabBarVisible,
      };
    }
  }
}, {
  tabBarPosition: 'bottom',
  cardStyle: {
    backgroundColor: '#fff'
  }
});
