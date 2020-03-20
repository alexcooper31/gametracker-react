import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CardWrapper, GameCard } from './styled';
import format from '../../Helpers/dateFormat';
import { currentGame, search } from '../../Redux/actions';
import { withRouter } from 'react-router-dom';

const Card = (props) => {
  const dispatch = useDispatch();

  const setGame = useCallback((item) => {
    dispatch(currentGame(item));
    dispatch(search([]));
    props.history.push(`/game/${item.id}`);
  }, [dispatch, props.history]);

  return (
    <CardWrapper>
      {
        props.info.map((item, index) =>
          <GameCard onClick={() => setGame(item)} key={index}>
            <img src={item.url} alt='cover' />
            <b>{item.name}</b>
            {
              item.first_release_date
              ? <p>{format(item.first_release_date)}</p>
              : <p>TBA</p>
            }
          </GameCard>
        )
      }
    </CardWrapper>
  );
}

export default React.memo(withRouter(Card));
