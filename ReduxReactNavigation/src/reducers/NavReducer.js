import { NavigationActions } from 'react-navigation';

import { initialNavState } from './data';
import { LOGIN, LOGOUT } from '../actions/types';
import { AppNavigator } from '../Router';

export default (state = initialNavState, action) => {
    switch (action.type) {
        case LOGIN:
            return AppNavigator.router.getStateForAction(NavigationActions.back(), state);
        case LOGOUT:
            return AppNavigator.router
                .getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
        default:
            return AppNavigator.router.getStateForAction(action, state);
    }
};
