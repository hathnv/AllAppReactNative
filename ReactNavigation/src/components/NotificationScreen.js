import React, { Component } from 'react';
import {
    Button, Image
} from 'react-native';

class NotificationScreen extends Component {
    static navigationOptions = {
        tabBar: {
            label: 'Notifications',
            icon: ({ tintColor }) => (
                <Image
                    source={require('../img/noti_icon.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            )
        }
    };

    render() {
        return (
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.goBack()}
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

export default NotificationScreen;
