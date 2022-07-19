import React, { useEffect, useState } from 'react';
import { AcountNav, AccountContent } from '../components/UserAcount';

export default function UserAcount() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setContent(localStorage.getItem('clicked') || 'Products');
  }, []);

  useEffect(() => {
    localStorage.setItem('clicked', content);
  }, [content]);

  const handleNavClick = (btn) => {
    setContent(btn);
    console.log(btn);
  };

  return (
    <>
      <AcountNav onNavClick={handleNavClick} content={content} />
      <AccountContent content={content} />
    </>
  );
}
