import React from 'react';
import './BaseNavigation.scss';
import BaseTab from "../BaseTab/BaseTab";

class BaseNavigation extends React.Component {
    render() {
        return (
            <nav className="base-navigation-component">
                <ul>
                    <li>
                        <BaseTab
                            className="tab-item"
                            theme="success"
                            to="/home"
                            value="Home"/>
                    </li>
                    <li>
                        <BaseTab
                            className="tab-item"
                            theme="warning"
                            to="/player"
                            value="Player"/>
                    </li>
                    {/* <li>
                        <BaseTab
                            className="tab-item"
                            theme="primary"
                            to="/contacts"
                            value="Contacts"/>
                    </li> */}
                </ul>
            </nav>
        );
    }
};

export default BaseNavigation;