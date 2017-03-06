import React, { Component } from 'react';
import {
    Button
} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <Button
                title="Go to my Profile"
                onPress={() => this.props.navigation.navigate('Profile', { name: 'Thang' })}
            />
        );
    }
}

export default HomeScreen;
