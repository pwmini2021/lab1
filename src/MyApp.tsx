import React from 'react';
import logo from './logo.svg';
import './MyApp.css';

function MyApp() {
    return (
        <div className="MyApp">
            <header className="MyApp-header">
                <img src={logo} className="MyApp-logo" alt="logo"/>
                <p>
                    Edit <code>src/MyApp.tsx</code> and save to reload.
                </p>
                <a
                    className="MyApp-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default MyApp;
