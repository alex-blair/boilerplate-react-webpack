import React from 'react'
import {Link} from 'react-router'

const Add = props => {
  return (
    <div className='add'>
      <h1>Add a chore to the list!</h1>
      <Link to='/'>Go to list </Link>
    </div>
  )
}

export default Add
