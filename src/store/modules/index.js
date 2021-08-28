import { combineReducers } from 'redux';

import apiStatus from './apiStatus';
import tvShow from './tvShow';


const rootReducer = combineReducers({
    apiStatus,
    tvShow,
});

export default rootReducer;
