import { createStackNavigator } from "react-navigation";
import RegisterScreenContainer from "../screens/RegisterScreen/RegisterScreenContainer";

export const RegisterStack = createStackNavigator({
  Register: {
    screen: RegisterScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        title: `Register your number`,
        headerStyle: {
          backgroundColor: "#2196F3"
        },
        headerTintColor: "white"
      };
    }
  }
});