import { SAVE_TOKEN, SEARCH, SET_CURRENT, SET_LOADING, LATEST_GAMES, UPCOMING_GAMES } from './actions';
import { getUserToken } from '../Helpers/userToken';

const initialState = {
  token: getUserToken(),
  loading: false,
  latestGames: [],
  upcomingGames: [],
  searchResults: [],
  currentGame: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case SEARCH: {
      return {
        ...state,
        searchResults: action.payload
      }
    }
    case SET_CURRENT: {
      return {
        ...state,
        currentGame: action.payload
      }
    }
    case LATEST_GAMES: {
      return {
        ...state,
        latestGames: action.payload.games
      }
    }
    case UPCOMING_GAMES: {
      return {
        ...state,
        upcomingGames: action.payload.games
      }
    }
    default:
      return state;
  }
}
