import React, { useState } from 'react';
import { AiOutlineShopping, AiOutlineSearch, AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import { Sidebar, Modal } from '../../UI';
import { useNavigate } from 'react-router-dom';
import Auth from '../../Auth/Auth';

export default function UserArea(props) {
  // Counter
  let counter = 1;

  const [showLoginModal, setShowLoginModal] = useState(false);

  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="flex gap-3">
        <AiOutlineSearch
          size={25}
          cursor={'pointer'}
          className={'transition-all hover:text-green-800'}
        />
        <AiOutlineUser
          size={25}
          cursor={'pointer'}
          className={'transition-all hover:text-green-800'}
          onClick={() => setShowLoginModal(true)}
        />

        {showLoginModal ? (
          <Modal
            show={showLoginModal}
            setShow={setShowLoginModal}
            className="h-2/3 rounded-xl lg:w-1/4"
          >
            <Auth />
          </Modal>
        ) : (
          ''
        )}
        <AiOutlineStar
          size={25}
          cursor={'pointer'}
          className={'transition-all hover:text-green-800'}
        />

        <div className="relative">
          <AiOutlineShopping
            size={25}
            cursor={'pointer'}
            className={'transition-all hover:text-green-800'}
            onClick={() => {
              setShowSidebar(true);
            }}
          />
          <span className="absolute -top-1.5 -right-2 flex h-5  w-5 items-center justify-center rounded-full bg-green-800 text-xs font-bold text-white">
            {counter}
          </span>
        </div>
      </div>

      <Sidebar show={showSidebar} setShow={setShowSidebar} right={true}>
        <div>Cart Sidebar</div>
      </Sidebar>
    </>
  );
}
