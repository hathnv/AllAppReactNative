import React, { Component } from 'react';
import {
    Button, View
} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Button
                    title="Go to my Profile"
                    onPress={() => navigate('Profile', { name: 'Thang' })}
                />
                
            </View>
        );
    }
}

export default HomeScreen;
