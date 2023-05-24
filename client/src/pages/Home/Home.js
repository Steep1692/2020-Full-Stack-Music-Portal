import React from 'react';
import './Home.scss';

import TheNews from '../../components/layouts/TheNews/TheNews';
import TheFileOperation from '../../components/layouts/TheFileOperation/TheFileOperation';

class Home extends React.Component {
    render() {
        return (
            <div className="page-index-component">
                <TheNews/>
                <TheFileOperation/>
            </div>
        );
    }
};

export default Home;
