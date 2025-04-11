import './styles/leftthings.css'
import { Link } from 'react-router-dom'

const LeftPannel = () => {
  return (
    <div className="left-pannel">
      <Link to="/todolist">To-Do List</Link>
    </div>
  )
}

export default LeftPannel
