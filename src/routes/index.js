import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Private from './Privite';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="/dashboard" element={<Private><Dashboard /></Private>} />
    </Routes>
  );
}
export default RoutesApp;