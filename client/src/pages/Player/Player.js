import React from 'react';
import { connect } from 'react-redux';
import BaseAudioPlayer from '../../components/base/BaseAudioPlayer/BaseAudioPlayer';
import api from '../../services/api';

class Home extends React.Component {
  componentDidMount() {
    api.getSharedZone()
      .then((responce) => {
        responce.json()
          .then((data) => {
            this.props.setNewsResult(data);
          })
      });
  }

  render() {
    let store = this.props.store;

    return (
      <div>
        <BaseAudioPlayer playlist={store.newsResult} />
      </div>
    );
  }
};

export default connect(
  state => ({
    store: state.newsReducer
  }),
  dispatch => {
    return {
      setNewsResult: (data) => dispatch({ type: 'SET_NEWS_RESULT', data }),
    }
  }
)(Home);
