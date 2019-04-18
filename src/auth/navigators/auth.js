import { createStackNavigator } from "react-navigation";
import LoginScreenContainer from "../screens/LoginScreen/LoginScreenContainer";
import LoginWebViewContainer from "../screens/LoginWebView/LoginWebViewContainer";

export const AuthStack = createStackNavigator({
  SignIn: {
    screen: LoginScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        title: `Sign in`,
        headerStyle: {
          backgroundColor: "#2196F3"
        },
        headerTintColor: "white"
      };
    }
  },
  LoginWebView: {
    screen: LoginWebViewContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        title: `Input your credentials`,
        headerStyle: {
          backgroundColor: "#2196F3"
        },
        headerTintColor: "white"
      };
    }
  }
});
