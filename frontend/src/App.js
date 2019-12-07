import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";

import Profile from './pages/Profile';
import Home from "./pages/Home";
import Chats from "./pages/Chats";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="navlinks">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/chats'} className="nav-link">Chats</Link></li>
                <li><Link to={'/profile'} className="nav-link">Profile </Link></li>
              </ul>
          </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/chats' component={Chats} />
                <Route path='/profile' component={Profile} />
            </Switch>
          </div>
          </Router>
    </div>
  );
}

export default App;
