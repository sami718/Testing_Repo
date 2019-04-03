import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import RegisterOption from '../Components/RegisterOption';

export default class Home extends Component {
  constructor() {
    super();
  }

  renderOption(title) {
    return (
      <View style={{ flexDirection: 'row', marginTop: 15, paddingTop: 5, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#cecece' }}>
        <Text style={{ flex: 1, fontSize: 20 }}>{title}</Text>
        <Text style={{ marginTop: 0, fontSize: 20, marginRight: 10, color: '#b8b8ba' }}>Not Set</Text>
        <Icon name={'ios-arrow-forward-outline'} color={'#b8b8ba'} size={28} style={{ marginTop: -2 }} />
      </View>
    );
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        style={{ justifyContent: 'flex-start' }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => {
              this.props.setModalVisible(!this.props.modalVisible);
            }}>
            <Text style={{ color: '#FD2B54', fontSize: 18 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Image style={{width: 70, height: 70, alignSelf: 'center', marginTop: 50}} source={require('../Images/donate.png')} />
        <Text style={{ alignSelf: 'center', fontWeight: '300', marginTop: 15, fontSize: 30 }}>Registration</Text>
        <Text style={{ alignSelf: 'center', marginBottom: 25, marginTop: 10, textAlign: 'center', fontSize: 18 }}>This information will be provided to{'\n'}Donate Life America and not sent to {'\n'}Apple.</Text>
        <RegisterOption title={'First name'}/>
        <RegisterOption title={'Middle name'} optional={true}/>
        <RegisterOption title={'Last name'} />
        <RegisterOption title={'Date of birth'} />
        <RegisterOption title={'Last 4 SSN'} />
        <RegisterOption title={'Email'} />
        <RegisterOption title={'Address'} />
        <RegisterOption title={'Address'} optional={true}/>
        <RegisterOption title={'City'} />
        <RegisterOption title={'State'} />
        <RegisterOption title={'ZIP'} />
        <RegisterOption title={'Sex'} />
        <TouchableOpacity style={{marginBottom: 15, marginTop: 15, backgroundColor: 'gray', height: 55, margin: 25, borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 19, fontWeight: '600'}}>Continue</Text>
        </TouchableOpacity>
        </ScrollView>
      </Modal>
    );
  }
}
