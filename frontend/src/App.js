import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <Profile/>
      </header>
    </div>
  );
}

export default App;
