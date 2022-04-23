// import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Form = (props) => {
  // const [values, setValues] = useState({
  //   email: '',
  //   password: '',
  //   showPassword: false,
  // });

  const { title } = props;
  const btnText = title === 'Register' ? 'Start coding now' : 'Login';

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className={'form-container' + (title === 'Register' ? ' register-form' : '')}>
      <Link to="/"><Logo /></Link>
      {/* header will change */}
      <h5>Join thousands of learners from <br />around the world</h5>
      {/* no display for login*/}
      <p className='intro'>Master web development by making real-life <br />projects. There are paths for you to <br />choose</p>
      <input type="email" />
      <input type="password" />
      <button className='btn-primary'>{btnText}</button>
    </div>
  );
}

export default Form;