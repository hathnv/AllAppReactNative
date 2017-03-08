import React, { Component } from 'react';
import {
    Button, Image
} from 'react-native';

class HomeScreenTab extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Home',
            icon: ({ tintColor }) => (
                <Image
                    source={require('../img/chat_icon.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }
    };

    render() {
        return (
            <Button
                title="Go to notifications"
                onPress={() => this.props.navigation.navigate('Notification')}
            />
        );
    }
}

const styles = {
    icon: {
        width: 26,
        height: 26
    }
};

export default HomeScreenTab;
