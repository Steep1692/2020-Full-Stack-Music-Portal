import React from 'react';
import './TheAppRouter.scss';
import { Route, Redirect } from "react-router-dom";

import HomeComponent from "../../../pages/Home/Home";
import PlayerComponent from "../../../pages/Player/Player";
const ContactsComponent = () => (
    <h2>Contacts</h2>
);

class TheAppRouter extends React.Component {
    render() {
        return (
            <div className="the-app-router-component container-md is-paddingless">
                <div className="base-div">
                    <Redirect from="/" to="/home"/>
                    <Route path="/home" component={HomeComponent}/>
                    <Route path="/player" component={PlayerComponent}/>
                    <Route path="/contacts" component={ContactsComponent}/>
                </div>
            </div>
        );
    }
};

export default TheAppRouter;
