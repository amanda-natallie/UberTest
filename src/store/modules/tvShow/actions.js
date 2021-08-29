

export const setCurrentSearch = (search) => ({
      currentTitle: search,
      type: 'SET_CURRENT_SEARCH',
});
export const setTVShowList = (list) => ({
      tvShowList: list,
      type: 'SET_TV_SHOW_LIST',
});
export const setCurrentSeason = (season) => ({
      seasonSelected: season,
      type: 'SET_CURRENT_SEASON',
});
