import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slices/auth';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../store/slices/auth';
import { Link, useNavigate } from 'react-router-dom';

const UserMenu = (props) => {
  const menuItems = {
    vendor: ['Dashboard'],
    customer: ['My profile'],
    delivery: ['Orders'],
    admin: [],
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };

  const { userType } = useSelector(selectUserData);

  return (
    <ul
      onClick={props.onClick}
      className="menu rounded-box absolute top-12 right-0 z-10 w-48 bg-white shadow-md"
    >
      {menuItems[userType].map((item, index) => {
        return (
          <Fragment key={index}>
            <li className="capitalize transition-colors hover:bg-black hover:text-white">
              <Link to={`${userType == 'customer' ? '/user-account' : '/'}`}>{item}</Link>
            </li>
          </Fragment>
        );
      })}
      {userType == 'customer' ? (
        <>
          <li>
            <Link to={'/cart'}>My cart</Link>
          </li>
        </>
      ) : null}

      <li>
        <button
          onClick={logoutHandler}
          className="capitalize transition-colors hover:bg-error hover:text-white"
        >
          logout
        </button>
      </li>
    </ul>
  );
};

export default UserMenu;
