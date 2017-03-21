import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import RootNavigator from './RootNavigator';

class AppNavigatorState extends Component {
    render() {
        return (
            <RootNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                })}
            />
        );
    }
}


export default AppNavigatorState;
