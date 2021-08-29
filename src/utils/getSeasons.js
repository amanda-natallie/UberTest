/* eslint-disable no-console */
import PropTypes from 'prop-types';

const getSeasons = (episodes = []) => {
    const seasons = Object.values(episodes.reduce((acc, curr) => {
        const seasonList = acc[curr.season] || [];
        return {
            ...acc,
            [curr.season]: [...seasonList, curr]
        };
    }, {})).map(season => season.sort((epCurr, epPrev) => epCurr.number - epPrev.number));

    return {
        length: seasons.length,
        seasons: Object.values(seasons),
    };
};

export default getSeasons;

getSeasons.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.object).isRequired
};
