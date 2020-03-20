import axios from 'axios';

import { setUserToken, getUserToken } from '../Helpers/userToken';

export const SAVE_TOKEN = 'SAVE_TOKEN';
export const LATEST_GAMES = 'LATEST_GAMES';
export const SEARCH = 'SEARCH';
export const SET_CURRENT = 'SET_CURRENT';
export const SET_LOADING = 'SET_LOADING';
export const UPCOMING_GAMES = 'UPCOMING_GAMES';

const url = process.env.REACT_APP_SERVER;

const createUser = (params) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${url}/users`,
        method: 'POST',
        data: {
          email: params.email,
          password: params.password
        }
      })
      setUserToken(result.data.token);
      dispatch(token(result.data.token));
    } catch (e) {
    }
  }
}

const signIn = (params) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${url}/auth`,
        method: 'POST',
        data: {
          email: params.email,
          password: params.password
        }
      })
      setUserToken(result.data.token);
      dispatch(token(result.data.token));
    } catch (e) {
    }
  }
}

const deleteToken = () => token(undefined);

const search = (term) => {
  return async (dispatch) => {
    try {
      if (term === '') {
        dispatch(searchResults([]));
        return;
      }
      const result = await axios.get(`${url}/games/search`, {
        headers: {
          authorization: `Bearer ${getUserToken()}`
        },
        params: {
          term
        }
      });
      dispatch(searchResults(result.data));
    } catch (e) {
    }
  }
}

const currentGame = (game) => setCurrentGame(game);

const latestGames = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${url}/games/latest`, {
        headers: {
          authorization: `Bearer ${getUserToken()}`
        }
      });
      dispatch(setLatestGames(result.data));
    } catch (e) {
    }
  }
}

const upcomingGames = (callback) => {
  return async (dispatch) => {
    try {
      const result = await axios.get(`${url}/games/upcoming`, {
        headers: {
          authorization: `Bearer ${getUserToken()}`
        }
      });
      dispatch(setUpcomingGames(result.data));
      callback();
    } catch (e) {
    }
  }
}

const token = (jwt) => {
  return {
    type: SAVE_TOKEN,
    payload: {
      token: jwt
    }
  };
};

const searchResults = (results) => {
  return {
    type: SEARCH,
    payload: {
      searchResults: results
    }
  }
};

const setCurrentGame = (game) => {
  return {
    type: SET_CURRENT,
    payload: {
      currentGame: game
    }
  }
};

const setLatestGames = (arr) => {
  return {
    type: LATEST_GAMES,
    payload: {
      games: arr
    }
  }
};

const setUpcomingGames = (arr) => {
  return {
    type: UPCOMING_GAMES,
    payload: {
      games: arr
    }
  }
};

export {
  createUser,
  signIn,
  deleteToken,
  search,
  currentGame,
  latestGames,
  upcomingGames,
}