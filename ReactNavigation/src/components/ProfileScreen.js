import React, { Component } from 'react';
import {
    Button, View, Text
} from 'react-native';


class ProfileScreen extends Component {
    static navigationOptions = {
        title: ({ state }) => `${state.params.name}'s Profile`,
        header: ({ state, setParams }) => ({
            right: (
                <Button
                    title={state.params.editting ? 'Done' : 'Edit'}
                    onPress={() => setParams({ editting: state.params.editting ? false : true })}
                // setParams change params of route
                />
            ),
        }),
    };

    render() {
        const { state, setParams, goBack } = this.props.navigation;
        //goBack: close the active screen and move back
        return (
            <View>
                <Text> Name: {state.params.name} </Text>
                <Button
                    title='Change name'
                    onPress={() => setParams({ name: 'Lucy' })} // change params name to Lucy
                />

                <Button
                    title='Go back from this HomeScreen'
                    onPress={() => goBack()}
                />
                <Button
                    title='Go back anywhere'
                    onPress={() => goBack(null)}
                />
                <Button
                    title='Go back from screen Profile'
                    onPress={() => goBack('Profile')}
                />
            </View>
        );
    }
}

export default ProfileScreen;
