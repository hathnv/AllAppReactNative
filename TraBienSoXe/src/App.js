import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import {
    Provider,
} from 'react-redux';
import store from './store';

import AppNavigatorState from './AppNavigatorState';
import RootNavigator from './RootNavigator';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RootNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('TraBienSoXe', () => App);
