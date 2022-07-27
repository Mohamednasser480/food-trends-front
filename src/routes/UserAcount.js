import React, { useEffect, useState } from 'react';
import { AcountNav, AccountContent } from '../components/UserAcount';

export default function UserAcount() {
  const [content, setContent] = useState(localStorage.getItem('clicked') || 'Products');

  useEffect(() => {
    localStorage.setItem('clicked', content);
  }, [content]);

  const handleNavClick = (btn) => {
    setContent(btn);
  };

  return (
    <div className="flex">
      <AcountNav onNavClick={handleNavClick} content={content} />
      <AccountContent content={content} />
    </div>
  );
}
