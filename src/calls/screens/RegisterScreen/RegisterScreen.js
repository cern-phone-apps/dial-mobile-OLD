import React from "react";
import { WebView } from "react-native-webview";
import { logMessage } from "../../../common/utils/logging";
import { AsyncStorage } from "react-native";
import PropTypes from "prop-types";
import { ListItem, Text } from "react-native-elements";
import { FlatList, View } from "react-native";
import { getUserPhoneNumbers } from "../../actions/numbers";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

class RegisterScreen extends React.Component {
  static propTypes = {
    connected: PropTypes.bool,
    numbers: PropTypes.array,
    getUserPhoneNumbers: PropTypes.func.isRequired,
    setActiveNumber: PropTypes.func.isRequired
  };

  static navigationOptions = {
    title: "Select a phone number"
  };

  componentDidMount = () => {
    getUserPhoneNumbers();
  };

  _registerInAsync = () => {
    const { connected, navigation } = this.props;

    if (connected) {
      navigation.navigate("AppRegistered");
    }
  };

  componentDidUpdate = (prevProps: prevState) => {
    const { navigation } = this.props;
    navigation.navigate("RegisterLoading");
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    return <RegisterForm phoneNumber={item.phoneNumber} />;
  };

  render = () => {
    console.log("RegisterScreen");
    const { numbers } = this.props;
    return (
      <View>
        <Text h4>Select a number</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={numbers}
          renderItem={this.renderItem}
        />
      </View>
    );
  };
}

export default RegisterScreen;
