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
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [addProfileModalOpen, setAddProfileModalOpen] = useState(false);
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const router = useRouter();

  const handleLoginModal = (value: boolean) => {
    setLoginModalOpen(value);
  };

  const handleAddProfileModal = (value: boolean) => {
    setAddProfileModalOpen(value);
  };

  const handleApplyModal = (value: boolean) => {
    setApplyModalOpen(value);
  };

  const handleLoginButton = (e: Event) => {
    e.stopPropagation();
    setLoginModalOpen(false);
    router.push('/signin');
  };

  const handleAddProfileButton = (e: Event) => {
    e.stopPropagation();
    handleAddProfileModal(false);
    router.push('/myprofile');
  };

  const handleNoApplyButton = (e: Event) => {
    e.stopPropagation();
    handleApplyModal(false);
  };

  const handleApplyButton = async (e: Event) => {
    e.stopPropagation();
    await postApplication(shopId, noticeId, token);
    setApplyModalOpen(false);
    router.refresh();
  };

  const handleClick = () => {
    if (!token) {
      setLoginModalOpen(true);
      return;
    }

    if (emptyProfile) {
      setAddProfileModalOpen(true);
      return;
    }

    setApplyModalOpen(true);
  };

  return (
    <>
      <div onClick={handleClick}>{children}</div>
      {loginModalOpen && (
        <ModalPortal>
          <Modal
            icon='warning'
            buttonText={['로그인']}
            handleButton={[handleLoginButton]}
            handleModal={handleLoginModal}
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
            handleModal={handleAddProfileModal}
            handleButton={[handleAddProfileButton]}
            maxWidth='40rem'
            message='내 프로필을 먼저 등록해 주세요.'
            minWidth='20rem'
          />
        </ModalPortal>
      )}
      {applyModalOpen && (
        <ModalPortal>
          <Modal
            icon='check'
            buttonText={['신청하기', '아니오']}
            handleButton={[handleApplyButton, handleNoApplyButton]}
            handleModal={handleApplyModal}
            maxWidth='40rem'
            message='신청하시겠습니까?'
            minWidth='20rem'
            buttonColorChange
          />
        </ModalPortal>
      )}
    </>
  );
}

export default ApplyEventContainer;
