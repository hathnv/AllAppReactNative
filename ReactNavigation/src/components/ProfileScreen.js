import React, { Component } from 'react';
import {
    Button, View
} from 'react-native';

class ProfileScreen extends Component {
    static navigationOptions = {
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
            <View />
        );
    }
}

export default ProfileScreen;
