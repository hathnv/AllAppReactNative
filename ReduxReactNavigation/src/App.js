import React from 'react';
import {
    AppRegistry,
    AsyncStorage,
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    NavigationActions,
    addNavigationHelpers,
    StackNavigator,
} from 'react-navigation';
import {
    Provider,
    connect,
} from 'react-redux';

import store from './store';
import ProfileScreen from './components/ProfileScreen';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import { AppNavigator } from './Router';

ProfileScreen.navigationOptions = {
    title: 'Profile',
};
LoginScreen.navigationOptions = {
    title: 'Log In',
};

MainScreen.navigationOptions = {
    title: 'Home Screen',
};

const AppWithNavigationState = connect(state => ({
    nav: state.NavReducer,
}))(({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
));


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
AppRegistry.registerComponent('ReduxReactNavigation', () => App);
