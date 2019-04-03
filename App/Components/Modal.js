import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  constructor() {
    super();
  }

  renderOption(title) {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingTop: 5, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#cecece' }}>
        <Text style={{ flex: 1, fontSize: 20 }}>{title}</Text>
        <Text style={{ marginTop: 0, fontSize: 20, marginRight: 10, color: '#b8b8ba' }}>Not Set</Text>
        <Icon name={'ios-arrow-forward-outline'} color={'#b8b8ba'} size={28} style={{marginTop: -2}} />
      </View> 
    );
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        style={{justifyContent: 'flex-start'}}
      >
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <TouchableOpacity
            style={{flex: 1}}
            onPress={() => {
              this.props.setModalVisible(!this.props.modalVisible);
            }}>
            <Text style={{ color: '#FD2B54', fontSize: 18}}>Close</Text>
          </TouchableOpacity>
          <Text style={{ color: '#FD2B54', fontSize: 18 }}>Edit</Text>
        </View>
        <Image source={require('../Images/user.png')} style={{alignSelf: 'center', height: 110, marginBottom: 20}}/>
        {this.renderOption('Date of birth')}
        {this.renderOption('Sex')}
        {this.renderOption('Blood Type')}
        {this.renderOption('Fritzpatric skin type')}
        {this.renderOption('Wheelchair')}
        <View style={{marginTop: 55,  width: '111%', padding: 10, marginLeft: -20, borderBottomWidth: 1, borderTopWidth: 1}}>
          <Text style={{ alignSelf: 'center', color: '#FD2B54', fontSize: 18}}>Export health data</Text>
        </View>
      </Modal>
    );
  }
}
