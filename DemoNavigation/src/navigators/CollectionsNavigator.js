import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import CollectionsScreen from '../screens/collections/CollectionsScreen';

const CollectionsNavigator = StackNavigator({
    Home: { screen: CollectionsScreen }
});

CollectionsNavigator.navigationOptions = {
    tabBar: {
        label: 'Collections',
        icon: ({ tintColor }) => {
            return (
                <Icon
                    name={'ios-browsers'}
                    size={30}
                    color={tintColor}
                />
            );
        }
    }
}
export default CollectionsNavigator;