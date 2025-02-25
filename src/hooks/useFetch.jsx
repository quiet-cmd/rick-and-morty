import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(url);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(currentUrl);
    
      if (!response.ok) {
        throw new Error('sad UwU');
      }
      const responseData = await response.json();

      if(responseData?.error) {
        throw new Error('😒');
      }

      setError(undefined);

      if(responseData?.info && data) {
        setData((prevState) => {
          return {
            info: responseData.info,
            results: [...prevState?.results, ...responseData?.results],
          }
        });
      } else {
        setData(responseData);  
      }
            
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
    
  useEffect(() => {
    fetchData();
  }, [url, currentUrl]);

  const nextPage = () => {
    const newUrl = data?.info?.next;
    if(newUrl) {
      setCurrentUrl(data?.info?.next)
    }
  }
    
  return { data, isLoading, error, isSucces: !isLoading && !error, refetch: fetchData, nextPage,  };
}

export default useFetch;