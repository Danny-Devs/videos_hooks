import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideoLogic from '../hooks/useVideoLogic';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const { videos, SearchVids } = useVideoLogic('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      {/* can also be written onFormSubmit={SearchVids} */}
      <SearchBar onFormSubmit={(term) => SearchVids(term)} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
