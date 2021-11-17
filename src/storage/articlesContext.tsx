import React, {ReactNode, useState} from 'react';
import {createContext} from 'react';
import {cardDefaultData} from '../utils/defaultData';

type ContextProps = {
  articles: Definitions.Article[];
  currentArticle: Definitions.Article;
  saveAllArticles: (articles: Definitions.Article[]) => void;
  saveCurrentArticle: (current: Definitions.Article) => void;
  markedAsFavorite: (current: Definitions.Article, select: boolean) => void;
};

const ArticlesContext = createContext<ContextProps>({} as ContextProps);

interface Props {
  children: ReactNode;
}

export function ArticlesContextProvider({children}: Props) {
  const [newArticles, setNewArticles] = useState<Definitions.Article[]>([]);
  const [selectArticle, setSelectArticle] =
    useState<Definitions.Article>(cardDefaultData);
  function addAllArticles(articles: Definitions.Article[]) {
    setNewArticles(articles);
  }

  function addCurrentArticle(article: Definitions.Article) {
    setSelectArticle(article);
  }

  function markAsFavorite(article: Definitions.Article, select: boolean) {
    const temp = newArticles.map(art => ({
      ...art,
      isFavorite: art.title === article.title ? select : art.isFavorite,
    }));

    setNewArticles(temp);
  }

  const context = {
    articles: newArticles,
    currentArticle: selectArticle,
    saveAllArticles: addAllArticles,
    saveCurrentArticle: addCurrentArticle,
    markedAsFavorite: markAsFavorite,
  };

  return (
    <ArticlesContext.Provider value={context}>
      {children}
    </ArticlesContext.Provider>
  );
}
export default ArticlesContext;
