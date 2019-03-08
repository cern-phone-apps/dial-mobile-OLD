import { createStackNavigator } from "react-navigation";
import RegisterScreenContainer from "../screens/RegisterScreen/RegisterScreenContainer";

export const RegisterStack = createStackNavigator({
  Register: RegisterScreenContainer
});