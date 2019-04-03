import React, { Component } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import TodayTabNav from './TodayTabNav';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Source from '../Screens/Source';
import MedicalId from '../Screens/Medicalid';

const TabBar = createBottomTabNavigator(
  {
    Health_Data: { screen: HomeNavigator },
    Today: { screen: TodayTabNav },
    Sources: { screen: Source },
    MedicalId: { screen: MedicalId }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        if (routeName === 'Health_Data') {
          iconName = `md-apps${focused ? '' : ''}`;
        } else if (routeName === 'Today') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } else if (routeName === 'Sources') {
          iconName = `ios-heart-outline${focused ? '' : ''}`;
        } else if (routeName === 'MedicalId') {
          iconName = `ios-contract${focused ? '' : '-outline'}`;
        }
        tinColor = focused ? '#FD2B54' : tintColor;
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    initialRouteName: "Health_Data",
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#FD2B54',
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 12,
        fontWeight: "bold",
      },
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default TabBar;