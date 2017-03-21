import React, { Component } from 'react';
import {
    View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tag, Card } from '../../components';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class CollectionsScreen extends Component {
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
            <View>
                <View style={{
                    backgroundColor: '#0C0D0F',
                    width: screenWidth,
                    height: screenHeight / 6,
                    position: 'absolute'

                }}>
                    <Tag tag='#fire' />
                </View>

                <ScrollView style={{ paddingTop: screenHeight / 6, backgroundColor: '#0C0D0F' }}>
                    <Card bgIconColor='red' text='CUOC DOI'></Card>
                    <Card></Card>
                    <Card></Card>

                </ScrollView>
            </View>
        );
    }
}

export default CollectionsScreen;