import { combineReducers } from 'redux';
import favourites from './favourites';

const AppReducer = combineReducers({
    favourites
});

export default AppReducer;