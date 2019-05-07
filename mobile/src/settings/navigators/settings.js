import { createStackNavigator } from 'react-navigation';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

export default SettingsStack;
