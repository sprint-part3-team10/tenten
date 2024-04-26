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

  const handleLogout = async () => {
    await deleteCookie();
    router.push('/');
    router.refresh();
  };

  return (
    <>
      <button onClick={handleShowModal}>로그아웃</button>
      {isShow && (
        <ModalPortal>
          <Modal
            icon='warning'
            message={modalMessage}
            minWidth='20rem'
            maxWidth='45rem'
            buttonText={['로그아웃']}
            buttonWidthPercent='25%'
            handleModal={handleShowModal}
            handleButton={[handleLogout]}
          />
        </ModalPortal>
      )}
    </>
  );
}
