export default function SignupForm({
  profile,
  setProfile,
  handleRegister,
  handleChangeForm,
}) {
  return (
    <form
      action='#'
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        name='name'
        type='text'
        placeholder='Type your name'
        required
        onChange={(e) => handleChangeForm(e.target)}
        value={profile.name}
      />
      <label htmlFor='email'>Email address</label>
      <input
        id='email'
        name='email'
        type='email'
        placeholder='Type your email'
        onChange={(e) => handleChangeForm(e.target)}
        value={profile.email}
        required
      />

      <label htmlFor='password'>Password</label>
      <div className='input-group'>
        <input
          name='password'
          type='password'
          placeholder='Type password'
          required
          onChange={(e) => handleChangeForm(e.target)}
          value={profile.password}
        />
        <input
          name='confirmPassword'
          type='password'
          placeholder='Re-type password'
          required
          onChange={(e) => handleChangeForm(e.target)}
          value={profile.confirmPassword}
        />
      </div>

      <button className='mt-2 custom-btn' type='submit'>
        Register
      </button>
    </form>
  );
}
