import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import './App.css';

import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('never gonna give you up');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container app">
      <SearchBar onTermSubmit={search} />

      <div className="app-content">
        <VideoDetail video={selectedVideo} />

        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </div>
  );
};

export default App;
