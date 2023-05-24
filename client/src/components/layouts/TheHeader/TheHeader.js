import React from 'react';
import './TheHeader.scss';

import {NavLink} from "react-router-dom";

import BaseNavigation from "../../base/BaseNavigation/BaseNavigation";

const TheHeader = () => {
    return (
        <div className="the-header-component">
            <div className="wrapper container-lg">
                <div className="logo">
                    <NavLink
                        to="/home"
                    >Steep Music</NavLink>
                </div>
                <BaseNavigation/>
            </div>
        </div>
    );
};

export default TheHeader;
