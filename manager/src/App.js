import React, { Component } from 'react';
import {
    View, Text
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAF9Xtsfjla8Nhhb9uJRgAeOONLmV-wEvw",
            authDomain: "manager-a2cd2.firebaseapp.com",
            databaseURL: "https://manager-a2cd2.firebaseio.com",
            storageBucket: "manager-a2cd2.appspot.com",
            messagingSenderId: "230384691759"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;