import React, { Component } from 'react';
import {
    View, Text, Button
} from 'react-native';

class ProfileScreen extends Component {

    static navigationOption = {
        title: ({ state }) => `${state.params.name}'s Profile`,
        header: ({ state, setParams }) => ({
            right: (
                <Button
                    title={state.params.editting ? 'Done' : 'Edit'}
                    onPress={() => setParams({ editting: state.params.editting ? false : true })}
                />
            ),
        }),
    };

    render() {
        return (
            <Text></Text>
        );
    }
}

export default ProfileScreen;