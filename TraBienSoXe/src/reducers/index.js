import { combineReducers } from 'redux';

import XeReducer from './XeReducer';
import FindReducer from './FindReducer';

export default combineReducers({
    xe: XeReducer,
    find: FindReducer
});
