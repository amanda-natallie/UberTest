
const INITIAL_STATE = {
    isLoading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.status };
        default:
            return state;
    }
};

export default reducer;
