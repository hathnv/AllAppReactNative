import React, { Component } from 'react';
import {
    View, Text, Button
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import RecentChatScreen from './RecentChatScreen';
import ProfileScreen from './ProfileScreen';

class AllChat extends Component {

    static navigationOption = {
        title: "All"
    };

    render() {
        return (
            <Button
                title="Go to my profile"
                onPress={() => this.props.navigation.navigate('Profile', { name: 'Thang' })}
            />
        );
    }
}

const ModalStack = StackNavigator({
    Recent: {
        screen: RecentChatScreen,
    },
    Profile: {
        path: 'people/:name',
        screen: ProfileScreen
    }
});

export default AllChat;