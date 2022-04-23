import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../styles/components/_form.scss';

const Form = (props) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const btnText = props.title === 'Register' ? 'Start coding now' : 'Login';

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-container">
      <p>Logo</p>
      {/* header will change */}
      <h5>Join thousands of learners from around the world</h5>
      {/* no display for login*/}
      <p className='intro'>Master web development by making real-lifr projects. There are paths for you to choose</p>
      <div className="inputs">
        <TextField
          id='email'
          label='Email'
          type='email'
          value={values.email}
          required
          onChange={handleChange('email')}
        />
        <FormControl variant='outlined'>
          {/* <InputLabel htmlFor='password'>Password</InputLabel> */}
          <OutlinedInput
            id='password'
            required
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            label='Password'
            placeholder='Password'
            startAdornment={
              <InputAdornment position='start'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <button className='btn-primary'>{btnText}</button>
    </div>
  );
}

export default Form;