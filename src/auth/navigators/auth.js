import { createStackNavigator } from "react-navigation";
import LoginScreenContainer from "../screens/LoginScreen/LoginScreenContainer";

export const AuthStack = createStackNavigator({ SignIn: LoginScreenContainer });