/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FlowerDetailScreen from './src/screens/FlowerDetailScreen';
import FlowerHomeScreen from './src/screens/FlowerHomeScreen'
import RandomColorScreen from './src/screens/RandomColor';
import HomeScreen from "./src/screens/HomeScreen";

const App = createStackNavigator({
    Home:{
      screen: HomeScreen,
      navigationOptions: () => ({
        title: `Home`
      }),
    },
    FlowerHome:{
      screen: FlowerHomeScreen,
      navigationOptions: () => ({
        title: `Flowers`
      }),
    },
    FlowerDetail: {
      screen: FlowerDetailScreen,
      navigationOptions: () => ({
        title: `Detail`
      }),
    },
    RandomColor: {
      screen: RandomColorScreen,
      navigationOptions: () => ({
        title: `Colors`
      }),
    },
  } ,
{
  initialRouteName:'Home',
  defaultNavigationOptions:{
      title:'Home',
  }
}
);
navigationOptions = ({ navigation }) => {
  return{
      title:"Detail",
  };
};


export default createAppContainer(App);
