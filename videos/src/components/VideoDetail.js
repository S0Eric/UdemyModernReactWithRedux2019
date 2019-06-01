import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) return 'Loading...';

  const embedSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={ embedSrc }
          title="Selected Video"
          width="560" height="315"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{ video.snippet.title }</h4>
        <p>{ video.snippet.description }</p>
      </div>
    </div>
  );
}

export default VideoDetail;
