import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import HomeScreen from './screen/HomeScreen';

class Home extends Component {
    render() {
        return (
            <HomeScreen />
        );
    }
}

AppRegistry.registerComponent('Snapseed', () => Home);
