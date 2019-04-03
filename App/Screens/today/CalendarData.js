import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';

export default class CalendarData extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ title: 'fdfffs', decsc: 'ffb efrjk ef' }, { title: 'fdfffs', decsc: 'ffb efrjk ef' }, { title: 'fdfffs', decsc: 'ffb efrjk ef' },
        { title: 'fdfffs', decsc: 'ffb efrjk ef' }, { title: 'fdfffs', decsc: 'ffb efrjk ef' }]
    };
  }

  render() {
    console.log('at login')
    return (
      <View style={{flex: 1}}>
        <CalendarStrip
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'white',
          }}
          style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
          calendarHeaderStyle={{ color: 'white' }}
          calendarColor={'#7743CE'}
          dateNumberStyle={{ color: 'white' }}
          dateNameStyle={{ color: 'white' }}
          highlightDateNumberStyle={{ color: 'yellow' }}
          highlightDateNameStyle={{ color: 'yellow' }}
          disabledDateNameStyle={{ color: 'grey' }}
          disabledDateNumberStyle={{ color: 'grey' }}
          iconContainer={{ flex: 0.1 }}
        />
        {
          this.state.data.map((event, i) => (
            <View key={i}>
              <Text>{event.title}</Text>
            </View>
          ))
        }
      </View>
    );
  }
}
