import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Nav from './nav';

const App = () => (
    <div>
        <Nav/>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>Welcome to React</h1>
        </div>
    </div>
);

export default App;
