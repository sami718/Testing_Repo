import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Image } from 'react-native-animatable';
import HeaderFile from '../Components/HeaderFile';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderFile
          title={'Sources'}
          titleStyle={{ fontSize: 18 }}
          headerStyle={{ backgroundColor: '#F9F9F9' }}
        />
        <View style={{flex: 1}}>       
          <Image source={require('../Images/back.jpg')} style={{height: '100%', position: 'absolute', width: '100%', resizeMode: 'cover'}}/>
          <Text style={styles.title}>APPS</Text>
          <View style={[styles.appView, styles.view]}>
            <Text style={{ fontSize: 18, fontWeight: '400'}}>None</Text>
          </View>
          <Text style={[styles.title, {marginTop: 35}]}>DEVICES</Text>
          <View style={[styles.deviceView, styles.view]}>
            <Image source={require('../Images/phone.png')} />
            <Text style={styles.deviceName}>IOS Simulator</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    marginTop: 25
  },
  view: {
    height: 55,
    backgroundColor: 'white',
    borderBottomColor: 'yellow',
    marginTop: 7,
    borderTopColor: 'yellow',
    borderTopWidth: 1.3,
    borderBottomWidth: 0.3,
    paddingLeft: 15
  },
  appView: {
    justifyContent: 'center'
  },
  deviceView: {
    padding: 10,
    flexDirection: 'row'
  },
  deviceName: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 15,
    alignSelf: 'center'
  }
});
