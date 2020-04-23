import axios from 'axios';

import {uri, token} from '../../../api/config';

export const api = Object.freeze({
  getMovie: {
    fetch: (movie_id) => {
      return axios.get(`${uri}/movie/${movie_id}`, {
        params: {
          api_key: token,
          language: 'ru-Ru'
        }
      })
    }
  },
  getMovieImages: {
    fetch: (movie_id) => {
      return axios.get(`${uri}/movie/${movie_id}/images`, {
        params: {
          api_key: token,
        }
      })
    }
  },
  getMovieCredits: {
    fetch: (movie_id) => {
      return axios.get(`${uri}/movie/${movie_id}/credits`, {
        params: {
          api_key: token,
          language: 'ru-Ru'
        }
      })
    }
  }
});