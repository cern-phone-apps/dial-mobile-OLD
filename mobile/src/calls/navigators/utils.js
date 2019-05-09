// Fetch the token from storage then navigate to our appropriate place
import { logMessage } from '../../common/utils/logging';

export const redirectToCalling = async (calling, navigation) => {
  // const userToken = await AsyncStorage.getItem("userToken");

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  logMessage('Redirect to calling');
  if (calling) {
    logMessage('Redirecting to calling');
    navigation.navigate('Calling');
  }
};
