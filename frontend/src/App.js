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
              <div className="navbar-nav mr-auto">
                <Link to={'/'} className="nav-link"> Home </Link>
                <Link to={'/chats'} className="nav-link">Chats</Link>
                <Link to={'/profile'} className="nav-link">Profile </Link>
              </div>
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
