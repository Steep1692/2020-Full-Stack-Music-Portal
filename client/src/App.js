import React from 'react';

import TheHeader from "./components/layouts/TheHeader/TheHeader";
import TheFooter from "./components/layouts/TheFooter/TheFooter";
import TheAppRouter from "./components/layouts/TheAppRouter/TheAppRouter";

import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <TheHeader />
                    <TheAppRouter setNewsResult={this.props.setNewsResult}/>
                    <TheFooter/>
                </div>
            </Router>
        );
    }
};

export default App;
