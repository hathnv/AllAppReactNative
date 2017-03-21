import React, { Component } from 'react';
import {
    Dimensions, View, Text, Animated, LayoutAnimation, TextInput
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
class ShowInfo extends Component {

    state = {
        itemAnimatedValue: new Animated.Value(screenWidth / 2),
    }

    componentDidMount() {
        Animated.timing(
            this.state.itemAnimatedValue,
            {
                toValue: 0,
                duration: 300
            }
        ).start();
        // console.log('isnum', this.props.find);
    }

    render() {
        return (
            <Animated.View
                style={[
                    styles.container,
                    { right: this.state.itemAnimatedValue }
                ]}
            >
                <Text style={styles.num}>{this.props.xe.num}</Text>
                <Text style={styles.province}>{this.props.xe.province}</Text>
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        width: screenWidth / 2.5,
        height: screenWidth / 2.5,
        borderWidth: 0.5,
        margin: 2,
        borderColor: 'red',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    num: {
        color: '#fff',
        fontSize: 18,
    },
    province: {
        color: '#fff',
        fontSize: 14,
    },
};

export default ShowInfo;
