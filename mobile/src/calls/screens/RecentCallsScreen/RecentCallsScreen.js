import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';
import { FlatList, View } from 'react-native';
import moment from 'moment';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  }
];

export class RecentCallsScreen extends React.Component {
  static navigationOptions = {
    title: 'Recent Calls'
  };

  static propTypes = {
    recentCalls: PropTypes.array.isRequired
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    const printableDate = moment(item.startTime).calendar();
    const duration = moment.duration(
      moment(item.endTime).diff(moment(item.startTime))
    );

    console.log(duration);

    return (
      <ListItem
        title={`${item.name} (${item.phoneNumber})`}
        subtitle={printableDate}
        leftIcon={
          item.incoming
            ? {
                name: 'arrow-downward',
                type: 'ionicons',
                color: item.missed ? 'red' : 'green'
              }
            : {
                name: 'arrow-upward',
                type: 'ionicons',
                color: item.missed ? 'red' : 'green'
              }
        }
        rightIcon={{ name: 'phone', type: 'font-awesome' }}
        rightSubtitle={item.missed ? 'missed' : duration.humanize()}
        bottomDivider
        onPress={() => {
          console.log('Recent call pressed');
          if (!navigation) {
            console.log('Navigation is not defined');
          }
          navigation.navigate('RecentCallDetails', {
            name: 'Jane',
            recentCall: item
          });
        }}
      />
    );
  };

  render() {
    const { recentCalls } = this.props;
    return (
      <View>
        {/* other code from before here */}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={recentCalls}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default RecentCallsScreen;
