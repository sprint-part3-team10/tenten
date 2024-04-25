'use client';

import { ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';
import postApplication from '../api/postApplication';
import ModalPortal from './common/modal/ModalPortal';
import Modal from './common/modal/Modal';

interface EventContainerProps {
  shopId: string;
  noticeId: string;
  emptyProfile: boolean;
  token?: string;
  children: ReactElement;
}

function ApplyEventContainer({
  shopId,
  noticeId,
  emptyProfile,
  token,
  children,
}: EventContainerProps) {
  const [addProfileModalOpen, setAddProfileModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const router = useRouter();

  const handleModal = (value: boolean) => {
    setAddProfileModalOpen(value);
  };

  const handleClick = async () => {
    if (loginModalOpen || addProfileModalOpen) {
      setLoginModalOpen(false);
      setAddProfileModalOpen(false);
      return;
    }

    if (!token) {
      setLoginModalOpen(true);
      return;
    }

    if (emptyProfile) {
      setAddProfileModalOpen(true);
      return;
    }

    await postApplication(shopId, noticeId, token);
    router.refresh();
  };

  return (
    <div onClick={handleClick}>
      {children}
      {loginModalOpen && (
        <ModalPortal>
          <Modal
            icon='warning'
            buttonText={['로그인']}
            handleButton={[
              e => {
                e.stopPropagation();
                router.push('/signin');
              },
            ]}
            handleModal={handleModal}
            maxWidth='40rem'
            message='로그인이 필요합니다.'
            minWidth='20rem'
          />
        </ModalPortal>
      )}
      {addProfileModalOpen && (
        <ModalPortal>
          <Modal
            icon='warning'
            buttonText={['확인']}
            handleModal={handleModal}
            handleButton={[
              e => {
                e.stopPropagation();
                handleModal(false);
              },
            ]}
            maxWidth='40rem'
            message='내 프로필을 먼저 등록해 주세요.'
            minWidth='20rem'
          />
        </ModalPortal>
      )}
    </div>
  );
}

export default ApplyEventContainer;
