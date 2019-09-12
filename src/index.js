import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'typeface-roboto'

import Home from './components/pages/Home'
import Details from './components/pages/Details'
import './App.css'

import * as serviceWorker from './serviceWorker'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

serviceWorker.unregister();
