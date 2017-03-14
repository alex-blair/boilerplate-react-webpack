import React from 'react'

const App = props => {
  return (
    <div className='app'>
      <h1>Chores World </h1>
      {props.children}
    </div>
  )
}

export default App
