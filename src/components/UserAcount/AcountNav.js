import { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCommentAlt } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const userType = 'vendor';

export default function AcountNav({ onNavClick, content }) {
  // console.log(content);
  const [activeButton, setActiveButton] = useState(content);

  const handleClick = (btn) => {
    setActiveButton(btn);
    onNavClick(btn);
  };
  const buttons = {
    vendor: ['Products', 'Orders', 'Reviews', 'Add product', 'Transactions'],
    customer: ['Profile', 'Products', 'Orders', 'Reviews', 'wishlist'],
    delivery: ['Orders'],
  };
  const icons = {
    Products: <FaShoppingBag className="mx-3" />,
    Orders: <FaShoppingCart className="mx-3" />,
    Reviews: <FaCommentAlt className="mx-3" />,
    'Add product': <FaPlusSquare className="mx-3" />,
    wishlist: <FaStar className="mx-3" />,
    'Live Orders': <FaShoppingCart className="mx-3 " />,
    Profile: <IoPerson className="mx-3 " />,
  };

  return (
    <div className="mr-5 w-2/12 py-5">
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
  );
}
