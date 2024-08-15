import { useContext } from "react"
import { userContext } from "./ComponnentA"

function ComponnentD() {
  const userContextValue = useContext(userContext)
  if (!userContextValue) {
    return <div>No user context provided</div>
  }

const { user } = userContextValue
  return (
    <div className='box'>
      ComponnentD
      <h1>{`Hello ${user}`}</h1>
    </div>
  )
}

export default ComponnentD