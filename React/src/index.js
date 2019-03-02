import React, {Component} from 'react';
import {HashRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom';
import '../static/css/index.css';
import App from './App.js';

// Style Imports
import "normalize.css";
import "bulma/css/bulma.css";

class Index extends Component {
    render(){
        return(
            <div className="Index">
                <App />
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));