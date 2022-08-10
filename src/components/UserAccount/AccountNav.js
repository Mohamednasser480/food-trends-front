import { useState } from 'react';
import {
  FaShoppingBag,
  FaAngleRight,
  FaShoppingCart,
  FaCommentAlt,
  FaPlusSquare,
  FaAngleLeft,
  FaStar,
} from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import { AiOutlineTransaction } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/slices/auth';

export default function AccountNav({ onNavClick, content }) {
  const { userType } = useSelector(selectUserData);

  const [activeButton, setActiveButton] = useState(content);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleClick = (btn) => {
    setActiveButton(btn);
    onNavClick(btn);
  };
  const buttons = {
    vendor: ['Dashboard', 'Products', 'Reviews', 'Orders', 'Add product', 'Transactions'],
    customer: ['My profile', 'My orders', 'wishlist', 'Reviews'],
    delivery: ['Orders'],
  };
  const icons = {
    Dashboard: <MdDashboard className="mx-3" />,
    Products: <FaShoppingBag className="mx-3" />,
    Orders: <FaShoppingCart className="mx-3" />,
    Reviews: <FaCommentAlt className="mx-3" />,
    'Add product': <FaPlusSquare className="mx-3" />,
    wishlist: <FaStar className="mx-3" />,
    'Live Orders': <FaShoppingCart className="mx-3 " />,
    'My profile': <IoPerson className="mx-3 " />,
    Transactions: <AiOutlineTransaction className="mx-3 " />,
    'My orders': <FaShoppingCart className="mx-3" />,
  };
  // className={showSidebar ? 'w-3/12 py-10 lg:w-2/12' : 'hidden'}

  return (
    <>
      <div
        className={`fixed z-10 h-full w-[380px] bg-white p-10 shadow-2xl transition-all duration-300 md:static md:shadow-none ${
          showSidebar ? 'left-0' : '-left-[380px]'
        }`}
      >
        {buttons[userType]
          ? buttons[userType].map((btn, index) => (
              <button
                onClick={() => handleClick(btn)}
                key={index}
                className={`flex w-full items-center px-4 py-2 text-left text-xl hover:bg-primary hover:text-white ${
                  activeButton === btn ? 'bg-primary text-white' : ''
                }`}
              >
                {icons[btn]}
                {btn}
              </button>
            ))
          : null}
      </div>
      <button
        className={`fixed z-10 mt-2 rounded-full bg-white transition-all duration-300 hover:bg-slate-100 md:hidden ${
          showSidebar ? 'left-[335px]' : 'left-[10px]'
        }`}
        onClick={() => {
          setShowSidebar((showSidebar) => !showSidebar);
        }}
      >
        {showSidebar ? (
          <FaAngleLeft size={20} className="m-2" />
        ) : (
          <FaAngleRight className="m-2" size={20} />
        )}
      </button>
    </>
  );
}
