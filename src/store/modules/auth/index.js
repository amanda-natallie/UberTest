
const INITIAL_STATE = {
    isAuthenticated: true,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHENTICATED':
            return { ...state, isAuthenticated: action.status };
        default:
            return state;
    }
};

export default reducer;
