import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { About, Home, Profile } from "./pages";
import { Navbar } from "./components/Navbar/Navbar";
import { Alert } from "./components/Alert/Alert";
import { AlertState } from "./context/alert/AlertState";
import { GithubState } from "./context/github/GithubState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Navbar />
          <div className='container pt-4'>
            <Alert alert={{text: 'Test alert'}} />
            <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/about' component={About} />
              <Route path='/profile/:name' component={Profile} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
