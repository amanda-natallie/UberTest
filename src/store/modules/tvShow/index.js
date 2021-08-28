/* eslint-disable no-console */

const INITIAL_STATE = {
    currentTitle: '',
    tvShowList: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SEARCH':
            console.log('SET_CURRENT_SEARCH', action.currentTitle);
            return { ...state, currentTitle: action.currentTitle };
        case 'SET_TV_SHOW_LIST':
            console.log('SET_TV_SHOW_LIST', action.tvShowList);
            return { ...state, tvShowList: action.tvShowList };
        default:
            return state;
    }
};

export default reducer;
