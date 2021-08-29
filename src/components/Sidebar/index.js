/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTVShowList } from '../../store/modules/tvShow/actions';
import { setResponseStatus, setLoading } from '../../store/modules/apiStatus/actions';
import getSeasons from '../../utils/getSeasons';

import { Input, Button, SeasonsList } from '../';
import './styles.css';

const Sidebar = () => {
  const { isLoading } = useSelector(state => state.apiStatus);
  const [search, setSearch] = useState('');
  const [seasons, setSeasons] = useState(null);
const dispatch = useDispatch();


  const getTvShowList = async () => {
    dispatch(setLoading(true));
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${search}&embed=episodes`);
    const data = await response.json();
    return {
          data,
          status: response.status
        };
      };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, status } = await getTvShowList();
    const { episodes } = data._embedded;
    if (episodes.length > 0) {
      const { length } = getSeasons(data._embedded.episodes);
      setSeasons(length);
    }
    dispatch(setTVShowList(data));
    dispatch(setResponseStatus(status));
    dispatch(setLoading(false));
  };

  return (
    <aside>
      <div className="search-box">
        <h1>Search by Title</h1>
        <form>
          <Input
            placeholder="Search by Title"
            disabled={isLoading}
            value={search}
            setValue={(e) => setSearch(e.target.value)}
            onFocus={() => {
              dispatch(setResponseStatus(null));
              dispatch(setTVShowList(null));
              setSearch('');
              setSeasons(null);
            }}
          />
          <Button text="GO" disabled={isLoading} type="submit" action={(e) => handleSubmit(e)} />
        </form>
      </div>

      {seasons && <SeasonsList seasons={seasons} />}

    </aside>
    );
};

export default Sidebar;
