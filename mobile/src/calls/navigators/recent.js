import { createStackNavigator } from "react-navigation";
import RecentCallsScreenContainer from "../screens/RecentCallsScreen/RecentCallsScreenContainer";

export const RecentStack = createStackNavigator({
  Recent: {
    screen: RecentCallsScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        title: `Recent Calls`,
        headerStyle: {
          backgroundColor: "#2196F3"
        },
        headerTintColor: "white"
      };
    }
  }
});