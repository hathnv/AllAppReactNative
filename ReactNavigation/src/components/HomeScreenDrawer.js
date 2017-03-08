import React, { Component } from 'react';
import {
    Button, Image
} from 'react-native';

class HomeScreenDrawer extends Component {
    static navigationOptions = {

    };

    render() {
        return (
            <Button
                title="Go to Notification"
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

export default HomeScreenDrawer;
