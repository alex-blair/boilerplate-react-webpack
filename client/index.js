import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './components/App'
import List from './components/List'
import Add from './components/Add'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={List} />
        <Route path='add' component={Add} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
