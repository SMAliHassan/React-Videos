import React from 'react';

import './VideoCard.css';

const VideoCard = function ({ video, onVideoSelect }) {
  const thumbnail = video.snippet.thumbnails.medium.url;
  const videoTitle =
    video.snippet.title.length > 40
      ? video.snippet.title.slice(0, 40) + '...'
      : video.snippet.title;
  const channelTitle = video.snippet.channelTitle;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-card">
      <img className="video-card__img" alt="thumbnail" src={thumbnail} />
      <div className="video-card__content">
        <p className="video-card__video-title">{videoTitle}</p>
        <p className="video-card__channel-title">{channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;
