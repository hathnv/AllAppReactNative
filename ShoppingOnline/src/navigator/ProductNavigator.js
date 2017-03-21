import {
    TabNavigator, TabView
} from 'react-navigation';
import {
    Image
} from 'react-native';

import AllProductScreen from '../screens/AllProductScreen';
import Product from '../screens/Product';

const ProductNavigator = TabNavigator({
    AllProduct: { screen: AllProductScreen },
    Product: { screen: Product }
}, {
        tabBarComponent: TabView.TabBarBottom,
        tabBarPosition: 'top',
        swipeEnabled: true,
    });


export default ProductNavigator;
