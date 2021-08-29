/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useWindowSize from '../../hooks/useWindowSize';
import { LayoutWrapper, CardList, Loader, Divider } from '../../components';
import image404 from '../../images/404.png';
import imageSearch from '../../images/search.jpg';


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
              <>
                <Divider height={120} />
                <h1 className="text-center">
                  We could not find any Tv Shows related to <i>&quot;{currentTitle}&quot;</i>.<br />
                  Try again with another search key
                </h1>
                <Divider height={50} />
                <img src={image404} alt="empty" />
              </>
            );
        }
        if (!tvShowList && !responseStatus) {
          return (
            <>
              <Divider height={120} />
              <h1 className="text-center">
                Search something and we will show you the results!
              </h1>
              <img src={imageSearch} alt="search" />
            </>
          );
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
