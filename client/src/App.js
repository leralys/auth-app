import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Routes/Register';
import Login from './Routes/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/register' />} />
      <Route path='/register' element={<Register title={'Register'} />} />
      <Route path='/login' element={<Login title={'Login'} />} />
    </Routes>
  );
}

export default App;

// {loggedIn ? <Redirect to='/profile' /> : <HomePage />}