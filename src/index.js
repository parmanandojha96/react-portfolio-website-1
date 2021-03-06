import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import Jokes from './Jokes';
import './index.css';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' component={App}/>
            
            <Route path='/jokes' component={Jokes}/>
        </Switch>
    </Router>, 
    document.getElementById('root')
);