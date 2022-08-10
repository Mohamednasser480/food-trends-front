import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/slices/auth';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../store/slices/auth';
import { Link } from 'react-router-dom';

const UserMenu = (props) => {
  const menuItems = {
    vendor: ['Dashboard'],
    customer: ['My profile', 'My orders', 'wishlist', 'Reviews'],
    delivery: ['Orders'],
  };
  const dispatch = useDispatch();
  const logoutHandler = () => dispatch(logout());

  const { userType } = useSelector(selectUserData);
  console.log(userType);

  return (
    <ul
      onClick={props.onClick}
      className="menu rounded-box absolute top-12 w-48 -translate-x-1/2 bg-white shadow-md"
    >
      {menuItems[userType].map((item, index) => {
        return (
          <Fragment key={index}>
            <li className="capitalize transition-colors hover:bg-black hover:text-white">
              <Link to={'/user-account'}>{item}</Link>
            </li>
            {userType == 'customer' ? (
              <li>
                <Link to={'/cart'}>My cart</Link>
              </li>
            ) : null}
          </Fragment>
        );
      })}

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
