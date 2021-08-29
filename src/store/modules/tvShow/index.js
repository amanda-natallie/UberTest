/* eslint-disable no-console */

const INITIAL_STATE = {
    currentTitle: '',
    seasonSelected: 1,
    tvShowList: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_SEARCH':
            return { ...state, currentTitle: action.currentTitle };
        case 'SET_TV_SHOW_LIST':
            return { ...state, tvShowList: action.tvShowList };
        case 'SET_CURRENT_SEASON':
            return { ...state, seasonSelected: action.seasonSelected };
        default:
            return state;
    }
};

export default reducer;
