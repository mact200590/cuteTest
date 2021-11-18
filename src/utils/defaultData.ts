// import {Definitions} from '../types';

import moment from 'moment';

export const cardDefaultData = {
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: moment().format('DD/MM/YYYY'),
  content: '',
} as Definitions.Article;

export const articles = [];
