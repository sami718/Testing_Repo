import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends Component {
  render() {
    console.log('at login')
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title='Login' onPress={() => this.props.navigation.navigate('Tabbar')}/>
      </View>
    );
  }
}
