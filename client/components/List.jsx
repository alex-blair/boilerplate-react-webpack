import React from 'react'

const List = props => {
  return (
    <div>
      <ol>
        { props.data.resource.map(resource => {
          return (
            <li key={resource.id}>{resource.type}</li>
          )
        }) }
      </ol>
    </div>
  )
}

export default List
