import React, { Component } from 'react';
import {
    Button, View
} from 'react-native';

const LoginScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title='Login'
                onPress={() => navigation.dispatch({ type: 'Login' })}
            />
        </View>
    );
}

export default LoginScreen;
