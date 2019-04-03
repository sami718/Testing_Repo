import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import HeaderFile from '../Components/HeaderFile';
import Register from './Register';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <View style={{ paddingBottom: 70 }}>
        <HeaderFile
          title={'Health Data'}
          titleStyle={{ fontSize: 18, color: 'white', fontWeight: '600' }}
          headerStyle={{ backgroundColor: '#FD2B54' }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.organView}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={{ width: 50, height: 50 }} source={require('../Images/medicalId.png')} />
              <Text style={styles.title}>Medical ID</Text>
            </View>
            <Text style={styles.desc}>A medical id provides medical information about you that may be important in an emergency, like allergies and medical conditions</Text>
            <Text style={styles.options}>Create Medical ID</Text>
          </View>
          <View style={styles.organView}>
            <View style={{flexDirection: 'row'}}>
              <Image style={{width: 50, height: 50}} source={require('../Images/donate.png')}/>
              <Text style={styles.title}>Organ Donation</Text>
            </View>
            <Text style={styles.desc}>A single organ donar can save as many as eight lives. That's why apple has made it easy to sign up with Donate Life America's organ donation registry</Text>
            <TouchableOpacity onPress={() => { Linking.openURL('http://donatelifeindia.org/') }}><Text style={styles.options}>Learn More</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => {this.setState({modalVisible: true})}}><Text style={styles.options}>Sign Up with Donate Life</Text></TouchableOpacity>
          </View>
        </ScrollView>
        <Register modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible.bind(this)} />      
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  organView: {
    backgroundColor: 'white',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowColor: 'lightgrey',
    shadowOffset: {width: 0, height: 0},
    marginTop: 40,
    padding: 15
  },
  title: {
    alignSelf: 'center',
    marginLeft: 15,
    fontSize: 22
  },
  desc: {
    fontSize: 18,
    marginTop: 17,
    lineHeight: 24
  },
  options: {
    marginTop: 17,
    color: '#FD2B54',
    fontSize: 19
  }
});
