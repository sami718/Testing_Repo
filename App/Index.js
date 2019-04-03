import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import Login from './Screens/login/Login';
import TabBar from './Navigators/TabBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationService from '../App/Utils/NavigationService';

const Tabbar = createStackNavigator(
  {
    TabBar: {
      screen: TabBar,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  }
);

const RootNavigatorLogin = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Tabbar: {
      screen: TabBar,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  }
);

export default class Index extends Component {
  render() {
    return (
      <RootNavigatorLogin ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }} />
    );
  }
}
