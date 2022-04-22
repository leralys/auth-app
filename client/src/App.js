import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Routes/Register';
import Login from './Routes/Login';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to='/register' />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default App;

// {loggedIn ? <Redirect to='/profile' /> : <HomePage />}