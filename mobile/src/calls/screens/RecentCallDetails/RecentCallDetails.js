import React, { Component } from 'react';
import { Button, Icon, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import MakeCallButton from '../../components/MakeCallButton/MakeCallButton';
import { logMessage } from '../../../common/utils/logging';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  },
  icon: {
    display: 'flex'
  },
  iconTextContainer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconItem: {
    flex: 0.3,
    height: 40,
    width: 40,
    backgroundColor: '#FFF000'
  }
});

function getPrintableDate(recentCall) {
  let printableDate;
  if (recentCall.startTime) {
    printableDate = moment(recentCall.startTime).calendar();
  }
  return printableDate;
}

function getDuration(recentCall) {
  let duration;
  if (recentCall.startTime) {
    duration = moment.duration(
      moment(recentCall.endTime).diff(moment(recentCall.startTime))
    );
  }
  return duration;
}

/**
 * We use this to set the Navigation title
 */
class RecentCallDetails extends Component {
  static propTypes = {
    calling: PropTypes.bool
  };

  static defaultProps = {
    calling: false
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('phoneNumber', 'Recent Call Details')
    };
  };

  // Fetch the token from storage then navigate to our appropriate place
  redirectToCalling = async () => {
    const { calling, navigation } = this.props;
    // const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    logMessage('Redirect to calling');
    if (calling) {
      logMessage('Redirecting to calling');
      navigation.navigate('Calling');
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    logMessage('Updating RecentCallDetails');

    this.redirectToCalling();
  };

  render() {
    const { navigation, calling } = this.props;
    const { recentCall } = navigation.state.params;

    const printableDate = getPrintableDate(recentCall);
    const duration = getDuration(recentCall);

    const missedColor = recentCall.missed ? 'red' : 'green';
    const iconName = recentCall.incoming ? 'arrow-downward' : 'arrow-upward';

    return (
      <View style={styles.container}>
        <View style={[styles.iconTextContainer]}>
          <Icon name="phone" size={40} />
          <Text h2>{recentCall.phoneNumber}</Text>
        </View>
        <View style={[styles.iconTextContainer]}>
          <Icon name="clock" type="evilicon" size={40} />
          <Icon name={iconName} color={missedColor} type="ionicons" size={20} />
          {recentCall.missed ? (
            <Text>Missed</Text>
          ) : (
            <Text>{duration ? duration.humanize() : ''}</Text>
          )}
        </View>
        <View style={[styles.iconTextContainer]}>
          <Icon name="calendar" type="evilicon" size={40} />
          <Text>{printableDate}</Text>
          <Text>{JSON.stringify(calling)}</Text>
        </View>
        <MakeCallButton phoneNumber={recentCall.phoneNumber} />
        {/*<Button*/}
        {/*  onPress={() => {*/}
        {/*    navigation.navigate('Calling');*/}
        {/*  }}*/}
        {/*  title="Calling Screen"*/}
        {/*/>*/}
      </View>
    );
  }
}

export default RecentCallDetails;
