import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideoLogic = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    SearchVids(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const SearchVids = async (term) => {
    const response = await youtube.get('/search', {
      params: { q: term },
    });
    setVideos(response.data.items);
  };

  return { videos, SearchVids };
};

export default useVideoLogic;
