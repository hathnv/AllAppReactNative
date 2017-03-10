import React, { Component, StyleSheet } from 'react';
import {
    Button, Text, View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import store from '../store';

class MainScreen extends Component {
    componentWillMount() {
        console.log('login btn', this.props.isLoggedIn);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoginStatusMessage />
                <Text>This is {this.props.isLoggedIn}</Text>
            </View>
        );
    }
}
const LoginStatusMessage
    = connect(state => ({
        isLoggedIn: state.AuthReducer.isLoggedIn,
    }))(({ isLoggedIn, dispatch }) => {
        if (!isLoggedIn) {
            return <Text>Please log in</Text>;
        }
        return (
            <View>
                <Text style={styles.welcome}>
                    {'You are "logged in" right now'}
                </Text>
                <Button
                    onPress={() => dispatch(NavigationActions.navigate({ routeName: 'Profile' }))}
                    title="Profile"
                />
            </View>
        );
    });

const AuthButton = () => {
    console.log('login btn', isLoggedIn);
    return (
        {/*<Button
            title={this.props.isLoggedIn ? 'Logout' : 'Login'}
            onPress={this.props.isLoggedIn ? logout : login}
        />*/}
        // <Text></Text>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
};

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.AuthReducer.isLoggedIn,
    };
}

export default connect(mapStateToProps)(MainScreen);
