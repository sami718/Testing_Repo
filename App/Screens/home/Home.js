import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderFile from '../../Components/HeaderFile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements'
import styles from './HomeStyle';
import RenderOption from '../../Components/RenderOption';
import Modal from '../../Components/Modal';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      modalVisible: false
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    let s = require('../../Images/body.png');
    let sd = require('../../Images/record.png');
    let d = require('../../Images/health.png');
    let results = require('../../Images/results.png');
    let vitals = require('../../Images/vitals.png');
    let visible = this.state.visible;
    console.log('visile or not : ', this.state.visible)
    return (
      <View style={{flex: 1}}>
        <HeaderFile
          title={'Health Data'}
          titleStyle={{fontSize: 18}}
          headerStyle={{backgroundColor: '#F9F9F9'}}
          onRightClick={() => this.setState({ modalVisible: true})}
          rightLabel={<Ionicons name={'ios-contact'} size={28} color={'red'}/>}
        />
        <Modal modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible.bind(this)}/>
        <SearchBar
          lightTheme
          containerStyle={{ backgroundColor: 'white', borderBottomWidth: 0}}
          inputStyle={{ textAlign: 'center',backgroundColor: '#E4E5E7'}}
          placeholder='Search' />
        <ScrollView style={styles.content}>
          <View style={{flexDirection: 'row', top: -25}}>
            <Image source={require('../../Images/activity.png')} style={[styles.image, { marginRight: 5, marginLeft: 0 }]}/>
            <Image source={require('../../Images/mind.png')} style={styles.image}/>
          </View>
          <View style={{ flexDirection: 'row', top: -65 }}>
            <Image source={require('../../Images/nutrition.png')} style={[styles.image, {marginRight: 5, marginLeft: 0}]} />
            <Image source={require('../../Images/sleep.png')} style={styles.image}/>
          </View>
          <View style={{marginTop: -75}}>
            <RenderOption iconOrImage={'image'} name={s} title={'Body measurements'}/>
            <RenderOption iconOrImage={'image'} name={sd} title={'Health Records'} />
            <RenderOption iconOrImage={'image'} name={d} title={'Reproductive Health'} />
            <RenderOption iconOrImage={'image'} name={results} title={'Results'} />
            <RenderOption iconOrImage={'image'} name={vitals} title={'Vitals'} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
