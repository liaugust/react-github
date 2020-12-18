import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navbar } from "./components/Navbar/Navbar";
import { About, Home, Profile } from "./pages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container pt-4'>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/profile/:name' component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
