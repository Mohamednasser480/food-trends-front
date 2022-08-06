import { useState } from 'react';
import {
  FaShoppingBag,
  FaAngleRight,
  FaShoppingCart,
  FaCommentAlt,
  FaPlusSquare,
  FaStar,
} from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { AiOutlineTransaction } from 'react-icons/ai';

const userType = 'vendor';

export default function AcountNav({ onNavClick, content }) {
  const [activeButton, setActiveButton] = useState(content);

  const [showSidebar, setShowSidebar] = useState(true);

  const handleClick = (btn) => {
    setActiveButton(btn);
    onNavClick(btn);
  };
  const buttons = {
    vendor: ['Products', 'Orders', 'Reviews', 'Add product', 'Transactions'],
    customer: ['My profile', 'My orders', 'wishlist', 'Reviews'],
    delivery: ['Orders'],
  };
  const icons = {
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

  return (
    <>
      <button
        className="hover:bg-primary hover:text-white"
        onClick={() => {
          setShowSidebar((showSidebar) => !showSidebar);
        }}
      >
        <FaAngleRight size={25} className="cursor-pointer hover:text-green-800" />
      </button>

      <div className={showSidebar ? 'w-2/12 py-10' : 'hidden'}>
        {buttons[userType]
          ? buttons[userType].map((btn, index) => (
              <button
                onClick={() => handleClick(btn)}
                key={index}
                className={`flex w-full items-center px-4 py-2 text-left hover:bg-primary hover:text-white ${
                  activeButton === btn ? 'bg-primary text-white' : ''
                }`}
              >
                {icons[btn]}
                {btn}
              </button>
            ))
          : null}
      </div>
    </>
  );
}
