import React from "react";
import createReactClass from "create-react-class";
import PropTypes from "prop-types";
import loadText from "terriajs/lib/Core/loadText";
import ObserveModelMixin from "terriajs/lib/ReactViews/ObserveModelMixin";
import knockout from "terriajs-cesium/Source/ThirdParty/knockout";

import VideoModal from "./VideoModal/VideoModal.jsx";

const DEAVIDEO_URL =
  "https://tiles.terria.io/static/de-australia-map-video.txt";

export const DEAVideo = createReactClass({
  displayName: "DEAVideo",
  mixins: [ObserveModelMixin],
  propTypes: {
    viewState: PropTypes.object.isRequired
  },
  getInitialState() {
    return {
      embedUrl: "https://www.youtube.com/embed/4DVAYZa0mK8"
    };
  },
  UNSAFE_componentWillMount() {
    knockout.track(this.props.viewState, ["showWelcomeVideo"]);
  },
  componentDidMount() {
    loadText(DEAVIDEO_URL).then(
      function(url) {
        if (url.indexOf("youtu.be") !== 0 || url.indexOf("embed") !== 0) {
          this.setState({
            embedUrl: url
          });
        }
      }.bind(this)
    );
  },

  render() {
    return (
      <VideoModal
        showVideo={this.props.viewState.showWelcomeVideo || false}
        setShowVideo={bool => {
          this.props.viewState.showWelcomeVideo = bool;
        }}
        embedUrl={this.state.embedUrl}
        large
      />
    );
  }
});

export default DEAVideo;
