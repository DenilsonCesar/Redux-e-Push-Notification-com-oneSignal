import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import { Container } from './styles';
import { connect } from 'react-redux';

const perfil = (props) => {

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18 }}>{props.email}</Text>
        </View>
    );
}


const mapStateToProps = state => (
    {
       email: state.emailReducers.email
    }
);

export default connect(mapStateToProps)(perfil);