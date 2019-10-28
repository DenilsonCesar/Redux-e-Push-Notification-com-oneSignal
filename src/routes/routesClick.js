import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from '../pages/main';
import Dashboard from './routes';

const AppNavigator  = createStackNavigator({
    Home: {screen: Main,
      navigationOptions: {
        header: null,
    }},
    Dashboard: {screen: Dashboard,
      navigationOptions: {
        header: null
    }}    
  }
);
  
  export default createAppContainer(AppNavigator);