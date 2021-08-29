/* eslint-disable no-console */
import React from 'react';
import { useSelector } from 'react-redux';
import { LayoutWrapper, Card, CardList } from '../../components';

const Home = () => {
    const { tvShowList, currentTitle } = useSelector(state => state.tvShow);
    const { responseStatus, isLoading } = useSelector(state => state.apiStatus);

    const renderCardList = () => {
        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (responseStatus === 404) {
            return (
              <Card className="empty-card">
                <h2>
                  We could not find any Tv Shows related to {currentTitle}.
                  Try again with another search key
                </h2>
              </Card>
            );
        }
        if (!tvShowList && !responseStatus) {
          return <h1>Search</h1>;
        }
        return (
          <CardList
            tvShowList={tvShowList}
            currentTitle={currentTitle}
          />
        );
    };

    return (
      <LayoutWrapper>
        {renderCardList()}
      </LayoutWrapper>
    );
};

export default Home;
