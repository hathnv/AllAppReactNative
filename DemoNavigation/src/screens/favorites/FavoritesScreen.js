import React, { Component } from 'react';
import {
    View, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class FavoritesScreen extends Component {
    static navigationOptions = {
        title: 'Wallz',

        header: ({ state, setParams }) => ({
            right: (
                <TouchableOpacity>
                    <Icon
                        name='ios-search'
                        size={20}
                        color='#fff'
                    />
                </TouchableOpacity>
            ),
            left: (
                <TouchableOpacity>
                    <Icon
                        name='ios-menu'
                        size={20}
                        color='#fff'
                    />
                </TouchableOpacity>
            ),
            style: {
                backgroundColor: '#0C0D0F',
                paddingRight: 10,
                paddingLeft: 10
            },
            titleStyle: {
                color: '#fff'
            }
        }),

    };

    render() {
        return (
            <View />
        );
    }
}

export default FavoritesScreen;