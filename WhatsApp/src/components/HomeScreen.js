import React, { Component } from 'react';
import {
  Text
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return <Text>Hello, Navigation!</Text>;
  }

}

export default HomeScreen;
