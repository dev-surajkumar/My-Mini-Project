import './styles/Header.css'
import { Link } from 'react-router-dom'
import AuthContext from '../AuthContext'
import { useContext, useState } from 'react'

const Header = () => {
  const {username, isLoggedIn, logoutUser}= useContext(AuthContext);
  const [showLogout, setShowLogout]=useState(false);

  const handleUsernameClick = () =>{
    setShowLogout(prev => !prev);
  };

  const handleLogout = () => {
    logoutUser();
    setShowLogout(false);
  };

  return (
    <div className='header'>
      <div className="header-nav">
      <Link to="/">
      <p>Home</p>
      </Link>
      <Link to="/post">
      <p>Posts</p>
      </Link>
      <Link to="/about">
      <p>About</p>
      </Link>
      <input type="text" />
      <button className='search'>Search</button>
      </div>

      <div className={`account ${isLoggedIn ? 'hide' : ''}`}>
        <Link to="/signup" className='log-btn'>
        Sign Up
        </Link>
        <Link to="/login" className='log-btn log-btn1'>
        Log In
        </Link>
      </div>
      {isLoggedIn && (
        <div className="username-display" onClick={handleUsernameClick}>
          <i className="fa-solid fa-circle-user"></i>
          <strong>{username}</strong>
          {showLogout && (
            <div className="logout-box" onClick={handleLogout}>
              Log Out
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Header
