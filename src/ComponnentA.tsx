import  { useState } from 'react'
import ComponnentB from './ComponnentB'

function ComponnentA() {
    const [user,setUser] = useState('Wassim')
  return (
    <div className='box'>ComponnentA
    <h1>Hello {user} from the top</h1>
    <ComponnentB user={user} />
    </div>
  )
}

export default ComponnentA