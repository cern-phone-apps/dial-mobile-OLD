import React from "react";
import PropTypes from "prop-types";
import { Button, Text } from "react-native-elements";
import { FlatList, View } from "react-native";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import LogoutFormContainer from "../../../auth/components/LogoutForm/LogoutFormContainer";

class RegisterScreen extends React.Component {
  static propTypes = {
    connected: PropTypes.bool,
    numbers: PropTypes.array,
    getUserPhoneNumbers: PropTypes.func.isRequired,
    setActiveNumber: PropTypes.func.isRequired,
    token: PropTypes.obj
  };

  static navigationOptions = {
    title: "Select a phone number"
  };

  componentDidMount = () => {
    const { getUserPhoneNumbers } = this.props;
    console.log("getUserPhoneNumbers");
    getUserPhoneNumbers();
    console.log(this.props);
  };

  componentDidUpdate = (prevProps: prevState) => {
    const { connected, navigation } = this.props;

    if (connected) {
      navigation.navigate("AppRegistered");
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const {token} = this.props;
    return <RegisterForm phoneNumber={item.phoneNumber} token={token} />;
  };

  render = () => {
    console.log("RegisterScreen");
    const { numbers } = this.props;
    return (
      <View>
        <Text h4>Select a number</Text>
        <LogoutFormContainer />
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
