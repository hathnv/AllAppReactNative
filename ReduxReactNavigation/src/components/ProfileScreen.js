import React, { Component } from 'react';
import {
    Text
} from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    render() {
        return (
            <Text style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                ProfileScreen
            </Text>
        );
    }
}

export default ProfileScreen;
