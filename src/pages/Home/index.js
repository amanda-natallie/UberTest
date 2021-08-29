/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';
import { LayoutWrapper, Card, CardList, Loader } from '../../components';


const Home = () => {
    const { tvShowList, currentTitle } = useSelector(state => state.tvShow);
    const { responseStatus, isLoading } = useSelector(state => state.apiStatus);
    const [contentWide, setContentWide] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
      if (width <= 1200) {
        setContentWide(false);
      } else {
        setContentWide(true);
      }
    }, [width]);


    const renderCardList = () => {
        if (isLoading) {
            return <Loader />;
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
      <LayoutWrapper contentWide={contentWide}>
        {renderCardList()}
      </LayoutWrapper>
    );
};

export default Home;
