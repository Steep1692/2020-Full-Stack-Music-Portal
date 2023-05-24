import React from 'react';
import './TheFooter.scss';

class TheFooter extends React.Component {
    render() {
        return (
            <div className="the-footer-component">
                <div className="wrapper container-md">
                    <div className="columns is-multiline">
                        <div className="social column is-full has-text-centered">
                            <ul>
                                <li><a href="http://vk.com/steep1692">VK</a></li>
                                <li><a href="http:/telegram.com/steep1692">Telegram</a></li>
                            </ul>
                        </div>
                        <div className="copyright column is-full has-text-centered">
                            @ Copyright 2019
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default TheFooter;
