import React, { useRef, useState, useCallback } from "react";

const Video = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const playOrPause = useCallback(() => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, []);

  const onPlay = useCallback(() => setIsPlaying(true), []);

  const onPause = useCallback(() => setIsPlaying(false), []);

  return (
    <div className="video-wrapper">
      <video
        onPlay={onPlay}
        onPause={onPause}
        ref={videoRef}
        className="video"
        src={src}
      />
      <div className="controls" onClick={playOrPause}>
        <img
          src={require("../images/play.png")}
          alt="play button"
          className={`video-control ${
            isPlaying ? "control-hidden" : "control-shown"
          }`}
        />
      </div>
    </div>
  );
};

export default Video;
