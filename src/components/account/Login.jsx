import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthContext from '../../AuthContext';
import { useContext } from 'react'

const Login = () => {
  const {
    register, 
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const {loginUser} = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    loginUser(data.username)
    navigate('/');
  };

  return (
    <form className='account-container' onSubmit={handleSubmit(onSubmit)}>
      <h1>Welcome Back!</h1>
      <div className="account-info">
        <div>
          <p className='account-action'>Log In</p>
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required!' })}
          />
          {errors.username && <p>{errors.username.message}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            {...register('password', {
              required: 'Password is required!',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters!',
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <Link to="/reset" className='forgot'>Forgot Password?</Link>
        </div>
      </div>

      <button className='action-button' type='submit'>Login</button>
      <Link to="/signup" className='action-button'>Create an Account</Link>
    </form>
  );
};

export default Login;
