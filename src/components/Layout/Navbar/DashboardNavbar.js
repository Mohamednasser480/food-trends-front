import Logo from "../../../assets/Logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";

// import { selectUserData } from '../../store/slices/auth';

const DashboardNavbar = ({ onToggleSidebar }) => {
  return (
    <nav className="h-20 bg-white shadow-sm">
      <div className="container flex h-full flex-col justify-center gap-y-10">
        <div className="flex items-center gap-x-5">
          {/* Left Section - Social Media and toggle sidebar button */}
          <div className="flex items-center gap-x-5">
            <AiOutlineMenu
              size={25}
              className="cursor-pointer hover:text-green-800"
              onClick={onToggleSidebar}
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
      </div>
    </nav>
  );
};

export default DashboardNavbar;
