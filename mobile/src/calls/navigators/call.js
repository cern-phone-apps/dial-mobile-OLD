import { createStackNavigator } from "react-navigation";
import HomeScreenContainer from "../screens/Home/HomeContainer";

export const CallStack = createStackNavigator({
  Home: {
    screen: HomeScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        title: `Dialer`,
        headerStyle: {
          backgroundColor: "#2196F3"
        },
        headerTintColor: "white"
      };
    }
  }
});