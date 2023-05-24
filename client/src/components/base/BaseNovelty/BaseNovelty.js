import React from 'react';
import "./BaseNovelty.scss";
import BaseAudioPlayer from "../BaseAudioPlayer/BaseAudioPlayer";

class BaseNovelty extends React.Component {

    render() {
        let {
            title,
            filePath,
            description,
        } = this.props;

        return (
            <div className="base-novelty-component">
                <div className="inner">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <BaseAudioPlayer
                        filePath={filePath}
                    />
                </div>
            </div>
        );
    }
};

export default BaseNovelty;