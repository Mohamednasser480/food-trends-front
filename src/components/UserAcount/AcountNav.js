import { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';

const userType = 'vendor';

export default function AcountNav({ onNavClick, content }) {
  const [activeButton, setActiveButton] = useState(content);

  const handleClick = (btn) => {
    setActiveButton(btn);
    onNavClick(btn);
  };
  const buttons = {
    vendor: ['Products', 'Orders', 'Reviews', 'Add product'],
    customer: ['Products', 'Orders', 'Reviews', 'wishlist'],
    delivery: ['Orders'],
  };
  const icons = {
    Products: <FaShoppingBag className="mx-1" />,
    Orders: <BsCart3 />,
    Reviews: <FaShoppingBag />,
    'Add product': <FaShoppingBag />,
    wishlist: <FaShoppingBag />,
    'Live Orders': <FaShoppingBag />,
  };

  return (
    <div>
      <div className="mr-10 w-2/12 py-5">
        {buttons[userType]
          ? buttons[userType].map((btn, index) => (
              <button
                onClick={() => handleClick(btn)}
                key={index}
                className="flex w-full items-center rounded px-4 py-1 text-left hover:bg-slate-200"
              >
                {icons[btn]}
                {btn}
              </button>
            ))
          : null}
      </div>
    </div>
  );
}
