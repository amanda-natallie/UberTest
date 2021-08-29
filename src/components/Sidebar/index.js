/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTVShowList } from '../../store/modules/tvShow/actions';
import { setResponseStatus, setLoading } from '../../store/modules/apiStatus/actions';

import { Input, Button } from '../';
import './styles.css';

const Sidebar = () => {
  const { isLoading } = useSelector(state => state.apiStatus);
  const [search, setSearch] = useState('');
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
    dispatch(setTVShowList(data));
    dispatch(setResponseStatus(status));
    dispatch(setLoading(false));
  };

  return (
    <aside>
      <h1>Search by Title</h1>
      <Input
        placeholder="Search by Title"
        disabled={isLoading}
        value={search}
        setValue={(e) => setSearch(e.target.value)}
        onFocus={() => {
          dispatch(setResponseStatus(null));
          dispatch(setTVShowList(null));
          setSearch('');
        }}
      />
      <Button text="GO" disabled={isLoading} type="submit" action={(e) => handleSubmit(e)} />
    </aside>
    );
};

export default Sidebar;
