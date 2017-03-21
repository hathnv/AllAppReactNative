import React from 'react';
import {
    StackNavigator
} from 'react-navigation';

import ProductNavigator from './navigator/ProductNavigator';
import Home from './screens/Home';
import { Header } from './components';

const RootNavigator = StackNavigator({
    Product: { screen: ProductNavigator },
    AllProduct: { screen: Home },
}, {

    }
);
ProductNavigator.navigationOptions = {
    title: 'Home'
};


export default RootNavigator;


