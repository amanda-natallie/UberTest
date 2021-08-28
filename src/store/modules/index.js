import { combineReducers } from 'redux';

import apiStatus from './apiStatus';
import tvShow from './tvShow';
import auth from './auth';


const rootReducer = combineReducers({
    apiStatus,
    auth,
    tvShow,
});

export default rootReducer;
