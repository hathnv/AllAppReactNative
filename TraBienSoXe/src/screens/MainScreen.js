import React, { Component } from 'react';
import {
    View, TextInput, Dimensions, ScrollView, ListView, TouchableOpacity, Text
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import ShowInfo from '../components/ShowInfo';
import { filterSearch } from '../actions';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Tra biển số xe',
    };

    state = {
        isSearching: false,
    }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.xe);

        console.log('find', this.props.find);
    }

    renderRow(xe) {
        return (
            <View>
                <ShowInfo xe={xe} />
            </View>
        );
    }

    renderSearch = () => {
        // console.log('def', this.state.isSearching);
        if (this.state.isSearching) {
            return (
                <TouchableOpacity
                    style={styles.searchContainer}
                    onPress={() => {
                        this.setState({
                            isSearching: false
                        });
                    }}
                >
                    <Icon
                        name='ios-search-outline'
                        size={30}
                        style={{ width: 30, height: 30 }}
                    />
                </TouchableOpacity>
            );
        }
        return (

            <View style={styles.searchInputContainer}>
                <Icon
                    name='ios-search-outline'
                    size={20}
                    style={{ width: 20, height: 20, marginLeft: 5 }}
                />
                <TextInput
                    placeholder="Search"
                    style={styles.inputStyle}
                />
                <TouchableOpacity
                    style={styles.cancelStyle}
                    onPress={() => {
                        this.setState({
                            isSearching: true
                        });
                    }}
                >
                    <Text>Cancel</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        // console.log('abc', this.state.isSearching);

        return (
            <View style={styles.container}>
                <View style={styles.btnFilter}>
                    <TouchableOpacity
                        style={styles.btnNum}
                        onPress={() => { this.props.dispatch(filterSearch((this.props.find))) }
                        }
                    >
                        <Text>Tra theo số</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnProvince}
                        onPress={() => { this.props.dispatch(filterSearch((!this.props.find))) }
                        }
                    >
                        <Text>Tra theo tỉnh</Text>
                    </TouchableOpacity>
                </View>
                {this.renderSearch()}
                <ListView
                    contentContainerStyle={styles.list}
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    searchContainer: {
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: (2 * (screenWidth / 3)) + 28,
        height: 30,
        marginBottom: 10
    },
    searchInputContainer: {
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: (2 * (screenWidth / 3)) + 28,
        height: 30,
        marginBottom: 10
    },
    inputStyle: {
        height: 25,
        width: ((2 * (screenWidth / 3)) + 28) - 20 - 70,
    },
    cancelStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        marginLeft: 5,
        height: 30
    },
    btnFilter: {
        width: screenWidth,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    btnNum: {
        borderRadius: 4,
        width: screenWidth / 2.5,
        height: screenWidth / 6,
        backgroundColor: '#fff',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnProvince: {
        borderRadius: 4,
        width: screenWidth / 2.5,
        height: screenWidth / 6,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

const mapStateToProps = (state) => {
    return {
        xe: state.xe,
        find: state.find
    };
};

export default connect(mapStateToProps, { filterSearch })(MainScreen);
