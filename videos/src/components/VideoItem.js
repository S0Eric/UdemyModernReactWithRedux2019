import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const { title, thumbnails } = video.snippet;
  return (
    <div 
      className="video-item item"
      onClick={() => onVideoSelect(video)}
    >
      <img className="ui image"
        src={ thumbnails.medium.url }
        alt={title}
      />
      <div className="content">
        <div className="header">{ title }</div>
      </div>
      <hr/>
    </div>
  );
}

export default VideoItem;
