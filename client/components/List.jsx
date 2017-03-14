import React from 'react'
import {Link} from 'react-router'

const List = React.createClass({
  getInitialState () {
    return {
      chores: [
        {
          task: 'Wash the dishes',
          done: true
        },
        {
          task: 'Vacuum the floor',
          done: false
        }
      ]
    }
  },

  render () {
    return (
      <div className='list'>
        <h1>Here is the list of chores!</h1>
        <ol>
          {this.state.chores.map(chore => {
            return (
              <li key={chore.task}>{chore.task}</li>
            )
          })}
        </ol>
        <Link to='/Add'>Add a new chore</Link>
      </div>
    )
  }
})

export default List
