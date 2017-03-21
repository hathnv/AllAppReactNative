import React, { StyleSheet } from 'react';
import {
    View, Dimensions, Image, Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const Card = ({ image, icon, bgIconColor, text }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../img/images.jpeg')}
            >
                <View style={styles.insideImage}>
                    <View style={{
                        margin: 5, flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <View style={[styles.iconView, { backgroundColor: bgIconColor }]}>
                            <Icon
                                name='ios-browsers'
                                size={20}
                                color='green'
                            />
                        </View>
                        <View style={{ marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.textStyle}>{text}</Text>
                        </View>
                    </View>
                </View>
            </Image>
        </View>
    );
};

const styles = {
    container: {
        marginBottom: 5,
        flex: 1,

    },
    insideImage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    iconView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 30,
        margin: 5
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 5,
        backgroundColor: 'transparent'
    }
};

export { Card }