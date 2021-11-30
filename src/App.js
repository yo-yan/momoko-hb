import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ComponentA} />
        <Route exact path='/componentb' component={ComponentB} />
        <Route exact path='/componentc' component={ComponentC} />
      </Switch>
    </Router>
  )
}

export default App
