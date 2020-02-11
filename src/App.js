import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './screens/layouts/header/header'
import CommonLayout from './screens/layouts/CommonLayout/CommonLayout'
import HomePage from './screens/Home/HomePage'

import './App.scss'

export default class App extends Component {

    render() {
        return (
            <Router>
                <Route component={Header} />                  
                <Switch>
                    <CommonLayout>
                        <Route exact path="/" component={HomePage} />            
                    </CommonLayout>                                                   
                </Switch>                  
            </Router>
        )
    }
}