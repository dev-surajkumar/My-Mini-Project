import './styles/leftthings.css'
import { Link } from 'react-router-dom'

const LeftPannel = () => {
  return (
    <div className="left-pannel">
      
      <Link to="/aiimage">AI Image Generator</Link>
      <Link to="/weather">My Weather App</Link>
    </div>
  )
}

export default LeftPannel
