import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeaderFile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} style={styles.content}>
        {this.props.iconOrImage === 'image' ? <Image source={this.props.name} style={styles.image}/> : <Icon />}
        <View style={styles.optionInfo}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Icon name={'ios-arrow-forward-outline'} color={'#565656'} size={25} style={{alignSelf: 'flex-end', textAlignVertical: 'bottom'}}/>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  optionInfo: {
    flexDirection: 'row',
    flex: 7,
    alignItems: 'center',
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cecaca',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  content: {
    flexDirection: 'row',
    marginBottom: 5,
    height: 50,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: '#302f2f',
    fontSize: 18
  },
  image: {
    height: 45,
    width: 40,
    flex: 1,
    resizeMode: 'contain',
    marginLeft: 10,
    marginRight: 10
  }
});
