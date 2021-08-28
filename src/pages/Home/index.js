import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading } from '../../store/modules/apiStatus/actions';
import { LayoutWrapper } from '../../components';

const Home = () => {
    const { isLoading } = useSelector(state => state.apiStatus);
    const dispatch = useDispatch();
    return (
      <LayoutWrapper>
        <div>Tá: {isLoading ? 'true' : 'false'}</div>
        <button onClick={() => dispatch(setLoading(!isLoading))}>Clica
        </button>
      </LayoutWrapper>
    );
};

export default Home;
