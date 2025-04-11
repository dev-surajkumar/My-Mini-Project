import './styles/Content.css'
import LeftPannel from './LeftPannel'
import CardPractice from './CardPractice'
import RightPannel from './RightPannel'

import UserContext from '../UserContext'
import { useContext } from 'react'

const Content = () => {
  const {user}=useContext(UserContext);
  return (
    <>
        <p className='usecontextexample'><span>{user}</span></p>
    <div className="content-container">
        <LeftPannel/>
        <CardPractice/>
        <RightPannel/>
      
    </div>
    </>
  )
}

export default Content
