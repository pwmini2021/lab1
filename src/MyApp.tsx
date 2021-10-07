import React from 'react';
import logo from './logo.svg';
import './MyApp.css';
import StudentsList from "./components/StudentsList";

function MyApp() {
    return (
        <div className="MyApp">
            <header className="MyApp-header">
                <img src={logo} className="MyApp-logo" alt="logo"/>
                <a
                    className="MyApp-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <StudentsList/>

            </header>
        </div>
    );
}

export default MyApp;
