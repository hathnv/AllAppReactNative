import React from 'react';
import {
    View, Text, Dimensions
} from 'react-native';

import Colors from '../constants/Colors';

const { RED, WHITE } = Colors;
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const Header = () => {
    const { container, textHeader } = styles;
    return (
        <View style={container}>
            <Text style={textHeader}>
                MOKI
            </Text>
        </View>
    );
};

const styles = {
    container: {
        backgroundColor: WHITE,
        borderBottomColor: RED,
        borderBottomWidth: 0.5,
        width: screenWidth,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: 40
    },
    textHeader: {
        color: RED,
        fontSize: 18
    }
};

export { Header };

