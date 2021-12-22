import React from 'react';

import './VideoDetail.css';

const VideoDetail = function ({ video }) {
  if (!video) return <h2>Loading...</h2>;

  return (
    <div className="video-detail">
      <iframe
        className="video-detail__video-frame"
        src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
        title="YouTube video player"
        allowfullscreen="allowfullscreen"
      ></iframe>

      <div className="video-detail__content">
        <h3 className="video-detail__title">{video.snippet.title}</h3>
        <p className="video-detail__description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
