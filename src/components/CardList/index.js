import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import './styles.css';
import { Card, Divider } from '../../components/';
import noCover from '../../images/no-image.jpg';
import getSeasons from '../../utils/getSeasons';

const CardList = () => {
    const { tvShowList: b, seasonSelected } = useSelector(state => state.tvShow);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
      if (b) {
        const { episodes: e } = b._embedded;
        if (e.length > 0) {
          const { seasons } = getSeasons(e);
          setEpisodes(seasons[seasonSelected - 1]);
        }
    }
    }, [seasonSelected]);

    const renderHTML = (string) => React.createElement('span', { dangerouslySetInnerHTML: { __html: string } });
    return (
      <>
        {b && (
        <>
          <div className="tvshow-header">
            <div className="header">
              <div className="header-left">
                <img src={b.image ? b.image.original : noCover} alt={b.name} />
              </div>
              <div className="header-right">
                <h1> {b.name} </h1>
                {renderHTML(b.summary)}
                <br />
                <h4>Genres: </h4>
                {b.genres.map(genre => (
                  <span className="chip" key={genre}>{genre} </span>
                  ))}
                <ul>
                  <li className="chip">
                    <b>Status: </b>{b.status}
                  </li>
                  <li className="chip">
                    <b>Language: </b> {b.language}
                  </li>
                  <li className="chip">
                    <b>Rating: </b> {b.rating.average}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Divider height={30} />
          {episodes.length > 0 && <h2>Season {seasonSelected}</h2>}
          {episodes.length > 0 && episodes.map((item) => (
            <Card key={item.id} className="episode-card" >
              <React.Fragment>
                <div className="episode-card-left">
                  <img src={item.image ? item.image.original : noCover} alt={item.name} />
                </div>
                <div className="episode-card-right">
                  <h3>{item.number} - {item.name}</h3>
                  <p>{renderHTML(item.summary)}</p>
                  <p className="chip">Release: {moment(item.airstamp).format('DD/MM/YYYY')}</p>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">Go to episode</a>
                </div>
              </React.Fragment>
            </Card>
          ))}
        </>
      )}
      </>
    );
};

export default CardList;
