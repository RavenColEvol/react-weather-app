import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import App from './App';
import Forecast from './apps/Forecast';
import About from './apps/About';

export default props => {
    return (
        <>
            <Router>
                <Route path='/' exact component={App}/>
                <Route path='/about' exact component={About}/>
                <Route path='/forecast' exact component={Forecast}/>
            </Router>
        </>
    )
}