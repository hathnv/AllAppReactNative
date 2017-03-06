import React from 'react';
import {

} from 'react-native';
import {
    StackNavigator
} from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';

const ModalStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Profile: {
        path: 'people/:name',
        screen: ProfileScreen
    }
});

export default ModalStack;
