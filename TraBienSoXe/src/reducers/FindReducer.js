import { NUM } from '../actions/types';

const INITIAL = false;

export default (state = INITIAL, action) => {
    switch (action.type) {
        case NUM:
            return action.payload;
        default:
            return state;
    }
};
