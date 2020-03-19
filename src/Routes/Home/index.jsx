import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper } from './styled';
import Cards from './cards';
import { latestGames, upcomingGames } from '../../Redux/actions';
import Loader from '../../Components/Loader';

const Home = () => {
  const dispatch = useDispatch();

  const upcoming = useSelector((state) => state.upcomingGames);
  const latest = useSelector((state) => state.latestGames);

  const [loading, setLoading] = useState(false)

  const fakeLoading = useCallback(() => {
    setLoading(false);
  }, [])

  useEffect(() => {
    if (upcoming.length > 0 || latest.length > 0) return;
    setLoading(true);
    dispatch(latestGames());
    dispatch(upcomingGames(fakeLoading));
  }, [dispatch, fakeLoading, latest.length, upcoming.length])

  return (
    <Wrapper>
      { loading ? <Loader /> : null }

      { loading ? null : <h2>New Releases:</h2> }
      <Cards info={latest} />

      { loading ? null : <h2>Upcoming Releases:</h2> }
      <Cards info={upcoming} />
    </Wrapper>
  );
}

export default Home;
