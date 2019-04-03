import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeaderFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <View style={styles.optionView}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TextInput
          placeholder={this.props.optional !== undefined && this.props.optional === true ? 'optional' : 'required'}
          placeholderTextColor={this.props.optional !== undefined && this.props.optional === true ? 'gray' : '#FD2B54'}
          style={{ height: 40, flex: 2, fontSize: 20, marginTop: 5, flex: 1, marginLeft: 15 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  optionView: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    height: 65,
    paddingTop: 5,
    paddingBottom: 10
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    flex: 0.7
  }
});
