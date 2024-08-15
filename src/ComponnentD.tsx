import { useContext } from "react"
import { userContext } from "./ComponnentA"

 
function ComponnentD() {
  const user = useContext(userContext)
  return (
    <div className='box'>ComponnentD

    
    <h1>{`Hello ${user}`}</h1>
    </div>
  )
}

export default ComponnentD