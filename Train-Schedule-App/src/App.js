// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllTrains from './Pages/AllTrains';
import SingleTrain from './Pages/SingleTrain';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Trains</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" component= <AllTrains/> />
          <Route path="/train/:trainNumber" component=<SingleTrain/> />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
