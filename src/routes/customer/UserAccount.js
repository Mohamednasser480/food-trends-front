import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Auth from '../../components/Auth/Auth';
import Profile from '../../components/UserAccount/Profile';
// import { AccountNav } from '../../components/UserAccount';
import { selectUserToken } from '../../store/slices/auth';

export default function UserAccount() {
  const [content, setContent] = useState(localStorage.getItem('clicked') || 'Products');
  const userToken = useSelector(selectUserToken);
  const isUserLoggedIn = userToken !== '';

  useEffect(() => {
    localStorage.setItem('clicked', content);
  }, [content]);

  const handleNavClick = (btn) => {
    setContent(btn);
  };

  return (
    <>
      <Routes>
        <Route element={<Profile />} path="/user-account" />
      </Routes>
      {isUserLoggedIn ? (
        <div className="flex">
          {/* <AccountNav onNavClick={handleNavClick} content={content} /> */}
        </div>
      ) : (
        <div className=" container h-full w-2/4">
          <Auth />
        </div>
      )}
    </>
  );
}
