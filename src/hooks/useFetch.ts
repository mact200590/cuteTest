import {useEffect, useState} from 'react';

interface Props {
  url: string;
}

export const useFetch = ({url}: Props) => {
  const [status, setStatus] = useState(false);
  const [data, setData] = useState([]);

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
