import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/default/Header';
import { signIn } from '../features/userSlice/userSlice';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success } = useSelector((state) => state.user);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  if (success) {
    navigate('/update');
  }

  const handleChange = (data) => {
    const { name, value } = data;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(signIn(user));
    } else {
      alert('Please input your email and password');
    }
  };

  return (
    <>
      <Header />
      <div className='sign-in'>
        <div className='title'>Login and manage your balances</div>
        <div className='description'>
          Note down your expenditure and income, then check your balances
          everyday
        </div>
        <form className='form-container' onSubmit={handleSubmit}>
          <label htmlFor='email'>Email Address</label>
          <input
            placeholder='Type your email'
            name='email'
            type='email'
            value={user.email}
            onChange={(e) => handleChange(e.target)}
          />
          <label htmlFor='password'>Password</label>
          <input
            placeholder='Type your password'
            name='password'
            type='password'
            value={user.password}
            onChange={(e) => handleChange(e.target)}
          />
          <button type='submit' className='custom-btn'>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
