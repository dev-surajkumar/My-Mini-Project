import './styles/righthings.css'
import { Link } from 'react-router-dom'
const RightPannel = () => {
  return (
    <div className='right-pannel'>
      <Link to="/todolist">To-Do List</Link>
    </div>
  )
}

export default RightPannel
