import React from 'react'
import ComponnentD from './ComponnentD'

function ComponnentC(props) {
  return (
    <div className='box'>ComponnentC
    <h1>{props.user}</h1>
    <ComponnentD user={props.user}  />
    
    </div>
  )
}

export default ComponnentC