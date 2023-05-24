import React from 'react';
import './TheNews.scss';

import {connect} from 'react-redux';

class TheNews extends React.Component {
    render() {
        return (
            <div className="the-news-row-component">
                <h1>New tracks: </h1>
                <p>Coming soon!</p>
            </div>
        );
    }
};

export default connect(
    state => ({
        store: state.newsReducer
    }),
    dispatch => ({
        //name : (data) => dispatch({ type: '...', data: '... })
    }),
)(TheNews);