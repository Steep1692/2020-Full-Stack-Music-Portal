import React from 'react';
import BaseAudio from '../BaseAudio/BaseAudio';

class BaseAudioPlayer extends React.Component {
  state = {
    currFile: { path: '' },
  }

  onPlaylistTrackClick(track) {
    this.setState({ currFile: track });
  }

  render() {
    let {
        playlist,
    } = this.props;

    let {
        currFile,
    } = this.state;


    let renderPlaylist = playlist ?
      playlist.map((track, key) => {
        return (
          <li
            key={key}>
            <button
              onClick={() => this.onPlaylistTrackClick(track)}>{track.path}</button>
          </li>
        );
      }) : 'Playlist empty.'

    return (
      <div className="base-audio-player-component">
        <BaseAudio filePath={process.env.REACT_APP_API + currFile.path} />
        <h2>Playlist :</h2>
        <ul>
          {renderPlaylist}
        </ul>
      </div>
    );
  }
};

export default BaseAudioPlayer;