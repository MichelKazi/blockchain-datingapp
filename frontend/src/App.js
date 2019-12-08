import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Profile from './pages/Profile';
import Home from "./pages/Home";
import Chats from "./pages/Chats";


function App() {
  return (
    <div className="App">
      <div className ="main">
      <div className="main-title">
        Polar
      </div>
      <Router>
        <div className="navlinks">
          <nav className="navbars">
              <div className="navbar-nav">
                <Link to={'/'} className="nav-link"> Home </Link>
                {/* <Link to={'/chats'} className="nav-link">Chats</Link> */}
                <Link to={'/profilse'} className="nav-link">Profile </Link>
              </div>
          </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                {/* <Route path='/chats' component={Chats} /> */}
                <Route path='/profile' component={Profile} />
            </Switch>
          </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
