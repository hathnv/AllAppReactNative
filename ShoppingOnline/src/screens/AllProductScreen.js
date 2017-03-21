import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { connect } from 'react-redux';
import { getCategories } from '../actions';

class AllProductScreen extends Component {

    static navigationOptions = {
        title: ({ state }) => state.categories
    };

    componentWillMount() {
        // this.props.dispatch(getCategories());
        // console.log(this.props.getCategories());
        this.props.getCategories();
        console.log('cate', this.props);
    }
    render() {
        // console.log('cate', this.props);
        return (
            <View />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps, { getCategories })(AllProductScreen);
