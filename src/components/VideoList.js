import React from 'react';

import VideoCard from './VideoCard';

const VideoList = function ({ videos, onVideoSelect }) {
  const videoList = videos.map(video => (
    <VideoCard
      key={video.id.videoId}
      video={video}
      onVideoSelect={onVideoSelect}
    />
  ));

  return <div>{videoList}</div>;
};

export default VideoList;
