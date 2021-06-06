import React from 'react';

const Video = (props) => {
  return (
    <div className="video__container">
      <iframe
        className="video__video"
        src={props.source}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
