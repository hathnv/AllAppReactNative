import React, { Component } from 'react';
import {
    Text, Button
} from 'react-native';

class ChatScreen extends Component {

    static navigationOptions = {

        title: ({ state }) => {
            if (state.params.mode === 'info') {
                return `${state.params.user}'s Contact Info`;
            }
            return `Chat with ${state.params.user}`;
        },

        header: ({ state, setParams }) => {
            let right = (
                <Button
                    title={`${state.params.user}'s info`}
                    onPress={() => setParams({ mode: 'info' })}
                />
            );

            if (state.params.mode === 'info') {
                right = (
                    <Button
                        title='Done'
                        onPress={() => setParams({ mode: 'none' })}
                    />
                );
            }

            return { right };


        }
    };

    render() {
        const { params } = this.props.navigation.state;
        console.log("state of Component", this.props);
        return (
            <Text>Chat with {params.user}</Text>
        );
    }
}

export default ChatScreen;