import { createStackNavigator } from "react-navigation";
import RecentCallsScreenContainer from "../screens/RecentCallsScreen/RecentCallsScreenContainer";

export const RecentStack = createStackNavigator({
  Recent: RecentCallsScreenContainer
});