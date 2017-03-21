import { combineReducers } from 'redux';
import CategoriesReducer from './CategoriesReducer';

export default combineReducers({
    categories: CategoriesReducer
});
