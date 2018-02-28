import React, {Component} from 'react';
import './App.css';
import createBrowserHistory from 'history/createBrowserHistory'
import Register from './components/register/register'
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
import {Router, Route, Switch, Link} from 'react-router-dom'
import firebase from 'firebase'
import firestore from 'firebase/firestore'
import Class from "./components/class/class";
import Classes from "./components/classes/classes";
import ClassInformation from "./components/class data/class-data";


// Initialize Firebase
var config = {
    apiKey: "AIzaSyAkQ7216O_wLDTHz0Rp5dq0a67oCKQsyc0",
    authDomain: "create-class-app.firebaseapp.com",
    databaseURL: "https://create-class-app.firebaseio.com",
    projectId: "create-class-app",
    storageBucket: "create-class-app.appspot.com",
    messagingSenderId: "762485823633"
};
firebase.initializeApp(config);
const history = createBrowserHistory();


class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={history}>
                    <div>
                            <Switch>
                            <Route exact path={'/'} component={Register}/>
                            <Route exact path={'/register'} component={Register}/>
                            <Route exact path={'/login'} component={Login}/>
                            <Route exact path={'/dashboard'} component={Dashboard}/>
                            <Route exact path={'/class'} component={Class}/>
                            <Route exact path={'/classes'} component={Classes}/>
                            <Route exact path={'/view-class/:id'} component={ClassInformation}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
