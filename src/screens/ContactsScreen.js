import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

export default class ContactsScreen extends Component {
  render () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Contacts</Text>
        <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    )
  }
}
