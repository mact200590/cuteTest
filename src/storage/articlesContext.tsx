import React, {createContext, ReactNode, useMemo, useState} from 'react';

type ContextProps = {
  articles: Definitions.Article[];
  currentArticle?: Definitions.Article;
  saveAllArticles: (articles: Definitions.Article[]) => void;
  selectCurrentArticleId: (titleId: string) => void;
  markedAsFavorite: (current: Definitions.Article, select: boolean) => void;
};

const ArticlesContext = createContext<ContextProps>({} as ContextProps);

interface Props {
  children: ReactNode;
}

export function ArticlesContextProvider({children}: Props) {
  const [articles, setArticles] = useState<Definitions.Article[]>([]);
  const [currentArticleId, setCurrentArticleId] = useState<string>('');
  const currentArticle = useMemo(
    () => articles.find(f => f.title === currentArticleId),
    [currentArticleId, articles],
  );
  function addAllArticles(article: Definitions.Article[]) {
    setArticles(article);
  }
  function selectCurrentArticleId(titleId: string) {
    setCurrentArticleId(titleId);
  }

  function markAsFavorite(article: Definitions.Article, select: boolean) {
    const temp = articles.map(art => ({
      ...art,
      isFavorite: art.title === article.title ? select : art.isFavorite,
    }));

    const sorted = temp.sort(a => (!a.isFavorite ? 1 : -1));
    setArticles(sorted);
  }

  const context = {
    articles,
    currentArticle,
    saveAllArticles: addAllArticles,
    selectCurrentArticleId,
    markedAsFavorite: markAsFavorite,
  };

  return (
    <ArticlesContext.Provider value={context}>
      {children}
    </ArticlesContext.Provider>
  );
}
export default ArticlesContext;
