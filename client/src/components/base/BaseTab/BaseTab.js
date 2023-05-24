import React from 'react';
import {NavLink} from "react-router-dom";
import './BaseTab.scss'

class BaseTab extends React.Component {
    render() {
        return (
                <div className="base-tab-component">
                    <NavLink
                        className={`link is-${this.props.theme}`}
                        to={this.props.to}>{this.props.value}</NavLink>
                </div>
        );
    }
};

export default BaseTab;