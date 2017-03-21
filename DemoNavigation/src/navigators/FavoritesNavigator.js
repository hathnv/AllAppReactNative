import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import FavoritesScreen from '../screens/favorites/FavoritesScreen';

const FavoritesNavigator = StackNavigator({
    Home: { screen: FavoritesScreen }
});

FavoritesNavigator.navigationOptions = {
    tabBar: {
        label: 'Favorites',
        icon: ({ tintColor }) => { // props: focused
            return (
                <Icon
                    name={'ios-heart'}
                    size={30}
                    color={tintColor}
                />
            );
        }
    }
}

export default FavoritesNavigator;