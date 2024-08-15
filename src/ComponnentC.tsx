import ComponnentD from './ComponnentD'

function ComponnentC({user}) {
  return (
    <div className='box'>ComponnentC
    <ComponnentD user={user}  />
    
    </div>
  )
}

export default ComponnentC