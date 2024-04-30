'use client';

import deleteCookie from '@/src/lib/deleteCookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ModalPortal from './modal/ModalPortal';
import Modal from './modal/Modal';

export default function LogoutButton() {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const modalMessage = '로그아웃 하시겠습니까?';

  const handleShowModal = (modalState: boolean) => {
    setIsShow(modalState);
  };

  const handleOpenModal = () => {
    setIsShow(true);
  };

  const handleLogout = async () => {
    await deleteCookie();
    router.replace('/');
    router.refresh();
  };

  return (
    <>
      <button onClick={handleOpenModal}>로그아웃</button>
      {isShow && (
        <ModalPortal>
          <Modal
            icon='warning'
            message={modalMessage}
            minWidth='20rem'
            maxWidth='40rem'
            buttonText={['예', '아니오']}
            buttonWidthPercent='25%'
            handleModal={handleShowModal}
            buttonColorChange
            handleButton={[
              handleLogout,
              e => {
                e.stopPropagation();
                handleShowModal(false);
              },
            ]}
          />
        </ModalPortal>
      )}
    </>
  );
}
