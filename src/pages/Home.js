import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const stateDefault = useSelector(state => state.apiStatus);
    const dispatch = useDispatch();
    return (
      <>
        <div>Tá: {stateDefault.isLoading ? 'true' : 'false'}</div>
        <button onClick={() => dispatch({
            status: !stateDefault.isLoading,
            type: 'SET_IS_LOADING',
          })}
        >Clica
        </button>
      </>
    );
};

export default Home;
