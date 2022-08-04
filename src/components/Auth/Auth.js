import { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  return !showRegister ? <Login setShowRegister={setShowRegister} /> : <Register />;
}
