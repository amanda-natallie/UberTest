/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { LayoutWrapper, Card } from '../../components';
import CardList from './CardList';

const Home = () => {
    const { tvShowList, currentTitle } = useSelector(state => state.tvShow);
    const { responseStatus, isLoading } = useSelector(state => state.apiStatus);

    return (
      <LayoutWrapper>
        {isLoading && <div>Loading...</div>}
        {tvShowList ? (
          <CardList tvShowList={tvShowList} />
        ) : (
          <Card className="empty-card">
            <h1>
              {responseStatus && responseStatus === 404 ?
                `We could not find any Tv Shows related to ${currentTitle}. Try again with another search key`
              : !isLoading && 'No TV Shows'}
            </h1>
          </Card>
        )}
      </LayoutWrapper>
    );
};

export default Home;
