import React from 'react'
import {Link} from 'react-router'

const List = props => {
  return (
    <div className='list'>
      <h1>Here is the list of chores!</h1>
      <Link to='/Add'>Add a new chore</Link>
    </div>
  )
}

export default List
