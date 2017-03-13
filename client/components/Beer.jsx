import React from 'react'

const Beer = props => {
  return (
    <div>
      <ol>
        { props.info.map(beerInfo => {
          return (
            <li key={beerInfo.name}>{beerInfo.name}</li>
          )
        }) }
      </ol>
    </div>
  )
}

export default Beer
