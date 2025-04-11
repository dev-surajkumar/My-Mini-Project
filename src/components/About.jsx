import './styles/About.css';
import { useContext } from 'react';
import AuthContext from '../AuthContext';

const About = () => {
  const { username, isLoggedIn } = useContext(AuthContext);

  return (
    <div className="about-container">
      <h1>About Our Platform</h1>
      {isLoggedIn && <p className="greeting">Hello, <strong>{username}</strong> 👋</p>}
      <p>Welcome to our application. Here's what we offer:</p>

      <ul className="about-list">
        <li><strong>🔐 Authentication System:</strong> Secure signup, login, and logout experience with real-time feedback.</li>
        <li><strong>🧠 Context API:</strong> Centralized state management for user login across components.</li>
        <li><strong>🧭 React Router:</strong> Seamless page navigation using SPA architecture.</li>
        <li><strong>💻 Modern UI:</strong> Clean and responsive design using custom CSS with reusable styles.</li>
        <li><strong>📁 Component-Based Structure:</strong> Easy to scale and maintain with organized components.</li>
      </ul>

      <p>We’re constantly working to improve and bring you more awesome features.</p>

      <div className="about-footer">
        <p>✨ Built with React, styled with love 💙</p>
      </div>
    </div>
  );
};

export default About;
