import React, { Component } from 'react';
import {
    Button, Image
} from 'react-native';

class NotiScreenDrawer extends Component {
    static navigationOptions = {
        drawer: () => ({
            label: 'Notification',
            icon: ({ tintColor }) => {
                <Image
                    source={require('../img/chat_icon.png')}
                    style={[styles.icon, { tintColor: tintColor }]}
                />
            }
        }),
    }

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

export default NotiScreenDrawer;
