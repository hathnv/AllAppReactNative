import React, { Component, StyleSheet } from 'react';
import {
    Button, Text, View
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import store from '../store';
import actions from '../actions';

class MainScreen extends Component {
    componentWillMount() {
        console.log('login btn', this.props.isLoggedIn);
    }

    render() {
        console.log('abc ', this.props.isLoggedIn);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LoginStatusMessage />
                <AuthButton isLoggedIn={this.props.isLoggedIn} />

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

const AuthButton = (props) => {
    return (

        <Button
            title={props.isLoggedIn ? 'Logout' : 'Login'}
            onPress={() => console.log('press', props.isLoggedIn)}
        />
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

export default connect(mapStateToProps, actions)(MainScreen);
