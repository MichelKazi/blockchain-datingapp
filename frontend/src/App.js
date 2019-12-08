import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Profile from './pages/Profile';
import Home from "./pages/Home";
// import Chats from "./pages/Chats";
import Index from './pages/index';
import NavBar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <div className ="main">
        {/* <Router> */}
        
          {/* <div className="navlinks">
            <nav className="navbars">
                <div className="navbar-nav">
                  <Link to={'/'} className="nav-link"> Home </Link>
                  <Link to={'/index'} className="nav-link">Index</Link>
                  <Link to={'/profile'} className="nav-link">Profile </Link>
                </div>
            </nav>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/index' component={Index} />
                  <Route path='/profile' component={Profile} />
              </Switch>
            </div>
        </Router> */}

        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => (
              <Home
              />
            )}
          />
          <Route
            exact
            path="/about"
            render={routerProps => (
              <Index
              />
            )}
          />
          <Route
            exact
            path="/profile"
            render={routerProps => (
              <Profile
              />
            )}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
