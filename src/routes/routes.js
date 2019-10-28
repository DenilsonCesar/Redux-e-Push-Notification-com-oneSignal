import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Perfil from '../pages/perfil'
import Dashboard from '../pages/dashboard'


import Icon from 'react-native-vector-icons/MaterialIcons';

const TabNavigator = createBottomTabNavigator({
    Dashboard: { screen: Dashboard, 
        navigationOptions: {
          tabBarIcon:({tintColor}) => (
            <Icon name='home' size={28} color={tintColor}/>
          )
        }
    },
    Perfil: { screen: Perfil,
      navigationOptions: {
        tabBarIcon:({tintColor}) => (
          <Icon name='person' size={28} color={tintColor}/>
        )
      }
  },
},{
    initialRouteName: 'Dashboard',
    tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'gray',
        tabStyle:{
          backgroundColor: '#fff'

        },
    },
    
}
);

export default createAppContainer(TabNavigator)