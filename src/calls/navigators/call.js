import { createStackNavigator } from "react-navigation";
import HomeScreenContainer from "../screens/Home/HomeContainer";
import { DetailsScreen } from "../../settings/navigators/settings";

export const CallStack = createStackNavigator({
  Home: HomeScreenContainer,
  Details: DetailsScreen
});