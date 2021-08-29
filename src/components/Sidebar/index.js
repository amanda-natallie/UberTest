/* eslint-disable no-underscore-dangle */
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setTVShowList, setCurrentSearch } from '../../store/modules/tvShow/actions';
import { setResponseStatus, setLoading } from '../../store/modules/apiStatus/actions';
import getSeasons from '../../utils/getSeasons';
import useClickOutside from '../../hooks/useClickOutside';

import { Input, Button, SeasonsList } from '../';
import './styles.css';

const Sidebar = ({ closed, onClickOutside }) => {
  const { isLoading } = useSelector(state => state.apiStatus);
  const [search, setSearch] = useState('');
  const [seasons, setSeasons] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef(null);


  const getTvShowList = async () => {
    dispatch(setLoading(true));
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${search}&embed=episodes`);
    const data = await response.json();
    return {
          data,
          status: response.status
        };
      };
  useClickOutside(ref, onClickOutside);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, status } = await getTvShowList();
    if (data) {
      const { length } = getSeasons(data._embedded.episodes);
      setSeasons(length);
    }
    dispatch(setTVShowList(data));
    dispatch(setResponseStatus(status));
    dispatch(setLoading(false));
    dispatch(setCurrentSearch(search));
  };

  return (
    <aside className={closed ? 'closed' : null} ref={ref}>
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

      {seasons ? <SeasonsList seasons={seasons} /> : null}

    </aside>
    );
};

export default Sidebar;


Sidebar.propTypes = {
  closed: PropTypes.bool,
  onClickOutside: PropTypes.func
};

Sidebar.defaultProps = {
  closed: false,
  onClickOutside: () => {}
};
