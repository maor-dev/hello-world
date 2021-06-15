import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import Newpost from './pages/Newpost'
import Postpage from './pages/Postpage'
import Weather from './pages/Weather'
import Sidebar from './components/Sidebar'


function App() {
  return (
    < >
      <Sidebar/>
      <Router>
      <div>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Newpost">
            <Newpost/>
          </Route>
          <Route path="/Postpage">
            <Postpage/>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
    

    </>
  );
}

export default App;
