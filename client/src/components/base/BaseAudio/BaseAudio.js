import React from 'react';
const AudioPlayer = require('react-responsive-audio-player');

class BaseAudioPlayer extends React.Component {
  render() {
    let filePath = this.props.filePath;

    return (
      <div className="base-audio-player-component">
        <audio src={filePath} controls></audio>
        <div id="audio_player_container">
          <AudioPlayer playlist={[{ title: 'f', url: filePath }]} />
        </div>
      </div>
    );
  }
};

export default BaseAudioPlayer;