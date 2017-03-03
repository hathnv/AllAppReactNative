import React, { Component } from 'react';
import {
    View, Text, Button
} from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    
    render() {
        const { navigate } = this.props.navigation
        return ( 
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                onPress={() => navigate('Chat', { user: "Thang" })}
                title="Chat"
                />
            </View>
        )
    }
}

export default HomeScreen;