/* eslint-disable @typescript-eslint/no-unused-vars */
import { ERROR_FETCHING_ARTICLES, ERROR_LOADING_ARTICLES, ERROR_UNKNOWN } from '../../constants';
import { Article, RootObject } from './types';
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL as string;


const api = {
  getArticles: async (): Promise<Article[]> => {
    try {
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error(ERROR_FETCHING_ARTICLES);
      }
     
      const data: RootObject = await response.json();
      
     
      if (!data.articles || data.articles.length === 0) {
        throw new Error(ERROR_LOADING_ARTICLES);
      }

      return data.articles;
    } catch (error) {
      
     throw new Error(ERROR_UNKNOWN);
    }
  },
};

export default api;

