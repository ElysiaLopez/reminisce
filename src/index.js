import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Homepage'
import WriteMessage from './WriteMessage'

import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

const Idk = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="WriteMessage" element={<WriteMessage/>}/>
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Idk/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
