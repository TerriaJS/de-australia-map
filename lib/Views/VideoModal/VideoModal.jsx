import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Styles from "./video-modal.scss";
import { useKeyPress } from "terriajs/lib/ReactViews/Hooks/useKeyPress";
import FadeIn from "terriajs/lib/ReactViews/Transitions/FadeIn/FadeIn";
import SlideUpFadeIn from "terriajs/lib/ReactViews/Transitions/SlideUpFadeIn/SlideUpFadeIn";
import Loader from "terriajs/lib/ReactViews/Loader";

// Aiming generic
export const VideoModal = ({
  showVideo,
  setShowVideo,
  embedUrl,
  large,
  placeholderImage = undefined
}) => {
  // This internal state is required so we can do nested animations
  const [videoVisible, setVideoVisible] = useState(showVideo);

  useKeyPress("Escape", () => {
    if (showVideo) {
      setShowVideo(false);
    }
  });

  return (
    <FadeIn
      isVisible={showVideo}
      onEnter={() => setVideoVisible(true)}
      transitionProps={{
        onExiting: () => setVideoVisible(false)
      }}
    >
      <div
        className={Styles.videoModalWrapper}
        onClick={() => {
          setShowVideo(false);
          setVideoVisible(false);
        }}
      >
        <SlideUpFadeIn isVisible={videoVisible}>
          <div
            className={classNames(Styles.videoModal, {
              [Styles.large]: large
            })}
            onClick={e => e.stopPropagation()}
            style={
              placeholderImage && {
                backgroundImage: placeholderImage
              }
            }
          >
            <div className={Styles.videoModalRatio}>
              <div className={Styles.videoModalLoading}>
                <Loader message={` `} />
              </div>
              <iframe
                className={Styles.videoModalIframe}
                src={embedUrl}
                allowFullScreen="allowfullscreen"
                allow="accelerometer; allowfullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </SlideUpFadeIn>
      </div>
    </FadeIn>
  );
};

VideoModal.propTypes = {
  showVideo: PropTypes.bool.isRequired,
  setShowVideo: PropTypes.func.isRequired,
  embedUrl: PropTypes.string.isRequired,
  placeholderImage: PropTypes.string,
  large: PropTypes.bool
};

export default VideoModal;
