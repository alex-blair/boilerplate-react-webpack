import React from 'react'

import List from './List'
import Beer from './Beer'
import data from './data'
import beerInfo from '../../data/beers.json'

const App = () => {
  return (
    <div>
      <h1>Let the foraging begin! </h1>
      <List data={data} />
      <Beer info={beerInfo.beers} />
    </div>
  )
}

export default App
