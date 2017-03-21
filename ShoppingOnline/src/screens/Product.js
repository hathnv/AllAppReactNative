import React, { Component } from 'react';
import {
    View, Text, Image
} from 'react-native';

class Product extends Component {

    static navigationOptions = {
        tabBar: {
            showIcon: true,
            showLabel: false,
            icon: () => (
                <Image
                    source={require('./icon.png')}
                    style={{ width: 50, height: 50 }}
                />
            )
        }
    };
    render() {
        return (
            <Text>Product</Text>
        );
    }
}

export default Product;
