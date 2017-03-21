import React from 'react';
import {
    View, Text, TouchableOpacity
} from 'react-native';

const Tag = ({ tag, onPress }) => {
    return (
        <Text
            style={styles.text}
            onPress={onPress}>{tag}</Text>
    );
};

const styles = {
    container: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 20,
        padding: 3,
        margin: 10,
    },
    text: {
        color: 'green',
        fontSize: 13,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        height: 30,
        padding: 3,
        margin: 10,
    }
};

export { Tag };