import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import OneSignal from 'react-native-onesignal';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Routes from './routes/routesClick';

import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
 
export default class index extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("bf5ae3e9-566a-4dc4-bb67-9df56e357055");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    alert("Notification received: ", notification);
  }

  onOpened(openResult) {
    alert('Message: ', openResult.notification.payload.body);
    alert('Data: ', openResult.notification.payload.additionalData);
    alert('isActive: ', openResult.notification.isAppInFocus);
    alert('openResult: ', openResult);
  }

  onIds(device) {
    alert('Device info: ', device);
  }

  setNavigationColor = (color) => {
    changeNavigationBarColor(color);
  };

  componentDidMount(){
    this.setNavigationColor('#ffa64d')
  }
 
  render() {
    return (
      <Provider store={ createStore(reducers)} >
        <StatusBar backgroundColor="#ffa64d" barStyle="light-content"/>
        <Routes />
      </Provider>
    );
  }
}
