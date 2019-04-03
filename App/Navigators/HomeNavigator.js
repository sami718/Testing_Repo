import React from 'react';

// Components
import Home from '../Screens/home/Home';

import { createStackNavigator } from "react-navigation";

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default HomeNavigator;
