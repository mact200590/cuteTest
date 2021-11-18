import {useEffect, useState} from 'react';

export const useFetch = (url: string) => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<Definitions.Article[]>([]);
  const [isError, setIsError] = useState('');

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setStatus(true);
      try {
        const response = await fetch(url, {
          method: 'GET',
        });
        const jsonResult = await response.json();
        setData(jsonResult.articles);
      } catch (error) {
        setIsError(`${error}`);
      }

      setStatus(false);
    };
    fetchData();
  }, [url]);

  return {isError, status, data};
};
