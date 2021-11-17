import {useEffect, useState} from 'react';

export const useFetch = (url: string) => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<Definitions.Article[]>([]);

  useEffect(() => {
    if (!url) {
      return;
    }
    const fetchData = async () => {
      setStatus(true);
      const response = await fetch(url, {
        method: 'GET',
      });
      const jsonResult = await response.json();
      setData(jsonResult.articles);
      setStatus(false);
    };
    fetchData();
  }, [url]);

  return {status, data};
};
