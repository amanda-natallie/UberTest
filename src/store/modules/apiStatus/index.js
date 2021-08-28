/* eslint-disable no-console */

const INITIAL_STATE = {
    isLoading: false,
    responseStatus: null,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            console.log('SET_IS_LOADING', action.status);
            return { ...state, isLoading: action.status };
        case 'SET_RESPONSE_STATUS':
            console.log('SET_RESPONSE_STATUS', action.status);
            return { ...state, isLoading: action.status };
        default:
            return state;
    }
};

export default reducer;
