
const INITIAL_STATE = {
    isAuthenticated: true,
    password: '123',
    user: 'amanda',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_IS_AUTHENTICATED':
            return { ...state, isAuthenticated: action.isAuthenticated };
        default:
            return state;
    }
};

export default reducer;
