import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import OEMScreen from '../screens/oem/OEMScreen';

const OEMNavigator = StackNavigator({
    Home: { screen: OEMScreen }
});

OEMNavigator.navigationOptions = {
    tabBar: {
        label: 'OEM',
        icon: ({ tintColor }) => {
            return (
                <Icon
                    name={'ios-images'}
                    size={30}
                    color={tintColor}
                />
            );
        }
    }
}

export default OEMNavigator;