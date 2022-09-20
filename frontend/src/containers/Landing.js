import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import exampleImage from '../assets/images/landing-pic-desktop.png';
import exampleImageMobile from '../assets/images/landing-pic-mobile.png';
import SignupForm from '../components/landing-page/SignupForm';
import { clearError, signUp } from '../features/userSlice/userSlice';

export default function Landing() {
  const {
    error,
    profile: user,
    loading,
    success,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  if (error) {
    alert(error);
    dispatch(clearError());
  }

  if (success) {
    navigate('/update');
  }

  const handleRegister = () => {
    if (profile) {
      if (profile.confirmPassword !== profile.password) {
        alert('Password did not match');
      } else {
        dispatch(signUp(profile));
      }
    } else {
      alert('Please signup');
    }
  };

  const handleChangeForm = (data) => {
    const { value, name } = data;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='landing-page'>
      <span className='big-text mb-2'>Sign up and manage your balance</span>
      <span className='small-text mb-3'>
        Note down your expenditure and income, <br /> then check your balance
        everyday
      </span>

      <SignupForm
        profile={profile}
        setProfile={setProfile}
        handleRegister={handleRegister}
        handleChangeForm={handleChangeForm}
      />
      {loading ? (
        <div style={{ color: 'white' }}>Signing Up....</div>
      ) : (
        <Link className='sign-up-mobile' to='/sign-up'>
          <button
            className='mt-2 custom-btn mobile'
            type='button'
            onClick={handleRegister}
          >
            Register
          </button>
        </Link>
      )}
      <img className='example-image' src={exampleImage} alt='example-pic' />
      <img
        className='example-image-mobile'
        src={exampleImageMobile}
        alt='example-mobile-pic'
      />
    </div>
  );
}
