import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Reset = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
  return (
    <div className='account-container'>
        <h1>Reset Password</h1>
        <div className="account-info">
            <div>
            <p className='account-action'>Password Reset</p>
            </div>
            <div>
            <p>A reset link will be sent to your inbox!</p>
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" />
            </div>
            
        </div>
        <Link className='action-button'>Send Reset Link</Link>
        <Link onClick={handleGoBack} className='action-button'>Go Back</Link>
      
    </div>
  )
}

export default Reset
