import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import MainScreen from './screens/MainScreen';

const RootNavigator = StackNavigator({
    Main: { screen: MainScreen }
});

export default RootNavigator;

