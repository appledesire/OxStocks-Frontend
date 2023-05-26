import { GET_NEWS, GET_NEW, GET_NEWS_TOTAL_COUNT } from '../actions/types';

const initialState = {
  new: {},
  totalCount: 0,
  news: []
}

function news(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: payload,
      };
    case GET_NEWS_TOTAL_COUNT:
      return {
        ...state,
        totalCount: payload
      }
    case GET_NEW:
      return {
        ...state,
        new: payload,
      };
    default:
      return state;
  }
}

export default news;
