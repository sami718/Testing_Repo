import React from 'react';

// Components
import Home from '../Screens/home/Home';

import { createStackNavigator } from "react-navigation";
import CalendarData from '../Screens/today/CalendarData';

const MedicalidNav = createStackNavigator(
  {
    CalendarData: {
      screen: CalendarData,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
  {
    initialRouteName: 'CalendarData',
  }
);

export default MedicalidNav;
