import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

import './App.scss';

const SamplePage = () => (
    <div>
        <h1>Just a Mock Sample Page</h1>
    </div>
)


function App() {
    return (
        <div>
            <h1>Hello World</h1>

            <Homepage />

            <SamplePage />

            <Route exact path='/' component={Homepage} />

        </div>
    );
}

export default App;
