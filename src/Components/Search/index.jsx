import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Icon from '../Icon';
import Platforms from './platforms';
import { search, currentGame } from '../../Redux/actions';
import format from '../../Helpers/dateFormat';
import {
  SearchWrapper,
  SearchBar,
  SearchIcon,
  SearchResults,
  SearchItem,
  SearchInfo,
  Overlay,
} from './styled';

const Search = ({ history }) => {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.searchResults);

  const [focus, setFocus] = useState(false);
  const [term, setTerm] = useState('');

  useEffect(() => {
    let timer = setTimeout(() => {
      if(term !== '') dispatch(search(term));
    }, 1000)
    
    return () => {
      dispatch(search(''));
      clearTimeout(timer);
    }
  }, [dispatch, term])

  const handleSearch = useCallback((e) => {
    setTerm(e.target.value);
    if (term.length <= 1) dispatch(search(''));
  }, [dispatch, term.length]);

  const cleanSearch = useCallback(() => {
    setTerm('');
    dispatch(search(''));
  }, [dispatch])

  const setGame = useCallback((item) => {
    setTerm('');
    dispatch(currentGame(item));
    dispatch(search(''));
    history.push(`/game/${item.id}`);
  }, [dispatch, history]);

  const searchFocus = useCallback(() => {
    setFocus(true)
  }, []);

  const searchBlur = useCallback(() => {
    setFocus(false)
  }, []);

  return (
    <SearchWrapper>
      <SearchBar
        value={term}
        onChange={(e) => handleSearch(e)}
        onFocus={searchFocus}
        onBlur={searchBlur}
        placeholder='Search for a game'
      />
      <SearchIcon focus={focus}>
        <Icon>search</Icon>
      </SearchIcon>
      <SearchResults>
        { term !== '' ? <Overlay onClick={cleanSearch} /> : null }
        {
          results.searchResults && results.searchResults.map((item, index) => 
            <SearchItem key={index} onClick={() => setGame(item)}>
              <img src={item.url} alt={item.name} />
              <SearchInfo>
                <b>{ item.name }</b>
                <p>{ format(item.first_release_date) }</p>
                <Platforms platforms={item.platforms} />
              </SearchInfo>
            </SearchItem>
          )
        }
      </SearchResults>
    </SearchWrapper>
  )
}

export default withRouter(Search);