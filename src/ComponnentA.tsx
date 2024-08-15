import  { useState,createContext } from 'react'
import ComponnentB from './ComponnentB'
export const userContext = createContext();

function ComponnentA() {
    const [user,setUser] = useState('Wassim')
  return (
    <div className='box'>ComponnentA
    <h1>Hello {user} from the top</h1>
    <userContext.Provider value={user} >
    <ComponnentB />
    </userContext.Provider>
    </div>
  )
}

export default ComponnentA