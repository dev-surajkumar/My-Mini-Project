import './styles/righthings.css'
import { Link } from 'react-router-dom'
const RightPannel = () => {
  return (
    <div className='right-pannel'>
      <Link to="/passreset">Password Reset with Toggle</Link>
    </div>
  )
}

export default RightPannel
