import { createStackNavigator } from "react-navigation";
import HomeScreenContainer from "../screens/Home/HomeContainer";

export const CallStack = createStackNavigator({
  Home: HomeScreenContainer
});