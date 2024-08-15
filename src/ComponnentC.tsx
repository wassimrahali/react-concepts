import { useContext } from 'react'
import ComponnentD from './ComponnentD'
import { userContext } from './ComponnentA'

function ComponnentC() {
  const user =useContext(userContext)
  return (
    <div className='box'>ComponnentC
    <h2>{user}</h2>
    <ComponnentD   />
    
    </div>
  )
}

export default ComponnentC