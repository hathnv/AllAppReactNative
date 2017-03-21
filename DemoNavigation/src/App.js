import React, { Component } from 'react';
import {
    AppRegistry, View
} from 'react-native';

import RootNavigator from './RootNavigator';

class App extends Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}

AppRegistry.registerComponent('DemoNavigation', () => App);