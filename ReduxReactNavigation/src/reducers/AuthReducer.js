import { initialAuthState } from './data';
import { LOGIN, LOGOUT } from '../actions/types';

export default (state = initialAuthState, action) => {
    if (action.type === LOGIN) {
        return { ...state, isLoggedIn: true };
    }
    if (action.type === LOGOUT) {
        return { ...state, isLoggedIn: false };
    }
    return state;
};
