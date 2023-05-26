import api from '../utils/api';
import {
  GET_NEWS,
  GET_NEWS_TOTAL_COUNT,
  GET_NEW
} from './types';

// Load User
export const getNews = (currentPage) => async dispatch => {
  try {
    const res = await api.get('/news?currentPage='+currentPage);

    dispatch({
      type: GET_NEWS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "Error"
    });
  }
};

// Load User
export const getTotalNewsCount = () => async dispatch => {
  try {
    const res = await api.post('/news/getTotalNewsCount');

    dispatch({
      type: GET_NEWS_TOTAL_COUNT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "Error"
    });
  }
};


export const getNew = (id) => async dispatch => {
  try {
    const res = await api.get(`/news/${id}`);

    dispatch({
      type: GET_NEW,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "Error"
    });
  }
}
 
