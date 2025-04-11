import './Signup.css'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../AuthContext'
import { useContext } from 'react'

const Signup = () => {
  const {register, handleSubmit, formState:{errors}}=useForm();
  const navigate = useNavigate();
  const {loginUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log('Signup Data:', data);
    loginUser(data.username)
    navigate('/');
  }
  return (
    <form className='account-container' onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up!</h1>
        <div className="account-info">
            <div>
            <p className='account-action'>Create Account</p>
            </div>
            <div>
            <label htmlFor="username">Username:</label>
            <input
             type="text"
             {...register('username',{required: 'Username is required'})}
             />
             {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
             type="email" 
             {...register('email', {required: 'Email is required'})}
             />
             {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="password" 
            {...register('password', {required: 'PassWord is required!', minLength: {value: 8, message:'Password must be atleast of 8 characters!'}})}
            />
            {errors.password && <p>{errors.password.message}</p>}
            </div>
        </div>
        <button className='action-button' type='submit'>Submit</button>
        <Link to="/login" className='action-button'>Have an Account
        </Link>
      
    </form>
  )
}

export default Signup
