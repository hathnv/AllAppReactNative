import React, { Component } from 'react';
import {

} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
import AllChat from './components/AllChat';
import RecentChat from './components/RecentChat';



const Navigators = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});


const MainScreenNavigator = TabNavigator({
  Recent: { screen: Navigators },
  All: { screen: AllChat }
}); 


export default MainScreenNavigator;