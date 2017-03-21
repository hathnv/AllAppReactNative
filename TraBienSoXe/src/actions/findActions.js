import * as types from './types';

export const filterSearch = (isNum) => {
    return {
        type: types.NUM,
        payload: isNum
    };
};
