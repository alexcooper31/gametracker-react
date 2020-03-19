import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  Wrapper,
  Info,
  Cover,
  Buttons,
  ListButton,
  LeftSlide,
  RightSlide
} from './styled';
import Icon from '../../Components/Icon';
import format from '../../Helpers/dateFormat';
import Platforms from './platforms'
import { withRouter } from 'react-router-dom';

const GamePage = ({ history }) => {
  const game = useSelector((state) => state.currentGame);

  useEffect(() => {
    if(!game.currentGame) {
      history.push('/');
    }
  }, [game.currentGame, history])

  const [listSlider, setListSlider] = useState(false);
  const [favSlider, setFavSlider] = useState(false);

  const [inList, setList] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  const listSliderOpen = useCallback(() => {
    setListSlider(true);
  }, [])

  const listSliderClose = useCallback(() => {
    setListSlider(false);
  }, [])

  const favSliderOpen = useCallback(() => {
    setFavSlider(true);
  }, [])

  const favSliderClose = useCallback(() => {
    setFavSlider(false);
  }, [])

  const listHandler = useCallback(() => {
    setList(!inList);
    setListSlider(!listSlider);
  }, [inList, listSlider])

  const favoriteHandler = useCallback(() => {
    setFavorite(!isFavorite);
    setFavSlider(!favSlider);
  }, [favSlider, isFavorite])

  return (
    <Wrapper>
      <h1>{game.currentGame && game.currentGame.name}</h1>
      <Cover>
        <img src={game.currentGame && game.currentGame.url} alt='cover' />
      </Cover>
      <Info>
        <Platforms platforms={game.currentGame && game.currentGame.platforms} />
        <h2>{format(game.currentGame && game.currentGame.first_release_date)}</h2>
        
        <Buttons>
          <ListButton
            onClick={listHandler}
            inList={inList}
            onMouseEnter={listSliderOpen}
            onMouseLeave={listSliderClose}
          >
            <Icon>{inList ? 'playlist_add_check' : 'playlist_add'}</Icon>
          </ListButton>
          <LeftSlide visible={listSlider}>
            {inList ? 'Remove Game' : 'Add to my List'}
          </LeftSlide>

          <ListButton
            onClick={favoriteHandler}
            isFavorite={isFavorite}
            onMouseEnter={favSliderOpen}
            onMouseLeave={favSliderClose}
          >
            <Icon>star</Icon>
          </ListButton>
          <RightSlide visible={favSlider}>
            {isFavorite ? 'Unmark Favorite' : 'Mark as Favorite'}
          </RightSlide>
        </Buttons>
        
      </Info>
    </Wrapper>
  );
}

export default withRouter(GamePage);
