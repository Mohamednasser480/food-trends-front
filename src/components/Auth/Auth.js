import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import VendorRegister from './VendorRegister';

export default function Auth() {
  const [showRegister, setShowRegister] = useState(false);
  const [showVendorRegister, setShowVendorRegister] = useState(false);

  return !showRegister ? (
    <Login setShowRegister={setShowRegister} />
  ) : !showVendorRegister ? (
    <Register setShowRegister={setShowRegister} setShowVendorRegister={setShowVendorRegister} />
  ) : (
    <VendorRegister
      setShowRegister={setShowRegister}
      setShowVendorRegister={setShowVendorRegister}
    />
  );
}
