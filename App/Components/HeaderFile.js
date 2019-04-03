import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Header, Body, Left, Right, Title } from 'native-base';

export default class HeaderFile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header style={[this.props.headerStyle, { display: 'flex', justifyContent: 'center' }]}>
        <Left style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.props.onLeftClick} onPress={this.props.onLeftClick} style={{ paddingRight: 30, paddingLeft: 10, paddingTop: 10, paddingBottom: 10 }}>
            <Text style={this.props.lefttLabelStyle}>{this.props.leftLabel}</Text>
          </TouchableOpacity>
        </Left>
        <Body style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
          <Text numberOfLines={1} style={[this.props.titleStyle, { overflow: 'visible' }]}>{this.props.title}</Text>
        </Body>
        <Right style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.props.onRightClick} style={{ paddingRight: 10, paddingLeft: 50, paddingTop: 10, paddingBottom: 10 }}>
            <Text style={this.props.rightLabelStyle}>{this.props.rightLabel}</Text>
          </TouchableOpacity>
        </Right>
      </Header>
    );
  }
}
