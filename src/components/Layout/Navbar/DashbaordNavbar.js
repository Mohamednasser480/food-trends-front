import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import { useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../UI';
import UserProfile from './UserProfile';
import { AccountNav } from '../../Layout/Navbar';

// import { selectUserData } from '../../store/slices/auth';

const DashbaordNavbar = ({ links }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container flex flex-col gap-y-10 py-6 xl:pt-8">
        <div className="flex items-center gap-x-5">
          {/* Left Section - Social Media and toggle sidebar button */}
          <div className="flex items-center gap-x-5">
            <AiOutlineMenu
              size={25}
              className="cursor-pointer hover:text-green-800 xl:hidden"
              onClick={() => {
                setShowSidebar(true);
              }}
            />
          </div>

          {/* Middle Section - Logo */}
          <div className="flex flex-1 md:justify-center">
            <Link to="/">
              <img src={Logo} alt="Logo" className="w-44 max-w-full xl:w-48" />
            </Link>
          </div>

          {/* Right Section - User Area */}
          <div>
            <UserProfile />
          </div>
        </div>

        {/* <Sidebar show={showSidebar} setShow={setShowSidebar}> */}
        <AccountNav links={links} />
        {/* </Sidebar> */}
      </div>
    </nav>
  );
};

export default DashbaordNavbar;
