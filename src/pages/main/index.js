import React, { useState, useEffect } from 'react';

import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import { emailActions } from '../../actions/emailActions'

//import firebase from 'react-native-firebase';

const main = (props) => {

    const [ password, setPassword ] = useState('')

    return (
        <View style={ styles.container }>
            <Text 
                style={ styles.bemVindo }>Bem-Vindo</Text>
            <TextInput 
                value={props.email}
                onChangeText={texto => props.emailActions(texto)}
                style={ styles.Preencher }
            />
            <TextInput 
                value={password}
                onChangeText={setPassword}
                style={[ styles.Preencher, styles.espaco ]}
            />
            <TouchableOpacity
                onPress={()=> props.navigation.navigate('Dashboard')} 
                style={ styles.BotaoEntrar }>
                <Text style={ styles.textoBotao }>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1, 
        backgroundColor: '#ffa64d'
    },
    Preencher: {
        backgroundColor: '#fff', 
        width: '90%', 
        marginBottom: 10, 
        fontSize: 18
    },
    BotaoEntrar: {
        backgroundColor: '#4d88ff', 
        height: 50, 
        width: '90%', 
        borderRadius: 5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textoBotao: {
        color: '#fff', 
        fontSize: 20, 
        fontWeight: 'bold' 
    },
    bemVindo: {
        fontSize: 25, 
        color: '#fff', 
        marginBottom: 20, 
        fontWeight: 'bold',
    },
    espaco: {
        marginBottom: 20
    }
})

const mapStateToProps = state => (
    {
       email: state.emailReducers.email
    }
);

export default connect(mapStateToProps, { emailActions })(main);

/*const [ feed, setFeed ] = useState([]);

const user = response.data;



this.setState({ feed: user })



setFeed({ feed : user })*/

