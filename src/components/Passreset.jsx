import { useState } from 'react'
import './styles/resetpass.css'
import { Link } from 'react-router-dom';

const Passreset = () => {
    const [pass, setPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [showPass, setShowPass]= useState(false);
    const [showNewPass, setShowNewPass] = useState(false);

    const handleSubmit = () => {
        if(newPass === pass){
            alert(`Hello UserActivation, you have changed your password and your password is ${pass}`);

        }else{
            alert `Your password dose not match! Try again!`
        }
    }
  return (
    <div className="pass-reset">
      <h1>Reset Password</h1>
      <div className="recheck">
       <div className='pass-in'>
        <input
         type={showPass ? 'text' : 'password'}
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Type password" />
        <button onClick={() => setShowPass(!showPass)}>
            {showPass ? 'Hide':'Show'}
            </button>
       </div>
       <div className='pass-in'>
        <input
         type={showNewPass ? 'text' : 'password'}
        value={newPass}
        onChange={(e) => setNewPass(e.target.value)}
        placeholder="Re-Type password" />
        <button onClick={()=> setShowNewPass(!showNewPass)}>
            {showNewPass ? 'Hide': 'Show'}
            </button>
       </div>
       <button className='pass-submit' onClick={handleSubmit}>Submit</button>
       <Link to='/signup'>Don't have an account? <span className='go-to-signup'>Click Here</span></Link>
      </div>
    </div>
  )
}

export default Passreset
