import './styles/righthings.css'
import { Link } from 'react-router-dom'
const RightPannel = () => {
  return (
    <div className='right-pannel'>
      <Link to="/todolist">To-Do List</Link>
      <Link to="/expense">Expense Tracker</Link>
      <Link to="/typing">Typing Speed Tracker</Link>
    </div>
  )
}

export default RightPannel
