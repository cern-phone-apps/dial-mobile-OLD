import { createStackNavigator } from 'react-navigation';
import RecentCallsScreenContainer from '../screens/RecentCallsScreen/RecentCallsScreenContainer';
import RecentCallDetailsContainer from '../screens/RecentCallDetails/RecentCallDetailsContainer';

export const RecentStack = createStackNavigator({
  Recent: {
    screen: RecentCallsScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: 'white'
        },
        title: `Recent Calls`,
        headerStyle: {
          backgroundColor: '#2196F3'
        },
        headerTintColor: 'white'
      };
    }
  },
  RecentCallDetails: {
    screen: RecentCallDetailsContainer,
    navigationOptions: () => {
      // console.log('Navigation options PARAM');
      // console.log(param);
      return {
        headerTitleStyle: {
          color: 'white'
        },
        // title: `Recent Call Details`,
        headerStyle: {
          backgroundColor: '#2196F3'
        },
        headerTintColor: 'white'
      };
    }
  }
});

export default RecentStack;
