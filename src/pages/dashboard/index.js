import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { connect } from 'react-redux';
// import { Container } from './styles';

const dashboard = (props) => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>{props.email}</Text>
    </View>
  )
}

const mapStateToProps = state => (
  {
     email: state.emailReducers.email
  }
);

export default connect(mapStateToProps)(dashboard);