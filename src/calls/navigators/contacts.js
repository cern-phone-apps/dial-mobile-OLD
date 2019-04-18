import { createStackNavigator } from "react-navigation";
import ContactsScreenContainer from "../screens/ContactsScreen/ContactsScreenContainer";

export const ContactsStack = createStackNavigator({
  Contacts: {
    screen: ContactsScreenContainer,
    navigationOptions: () => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        title: `Contacts`,
        headerStyle: {
          backgroundColor: "#2196F3"
        },
        headerTintColor: "white"
      };
    }
  }
});