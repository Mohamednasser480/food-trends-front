import { useState } from 'react';
import Login from './Login';

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  return !showRegister ? <Login setShowRegister={setShowRegister} /> : <div>register</div>;
}
