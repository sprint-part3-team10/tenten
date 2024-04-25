'use client';

import { ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalPortal from './common/modal/ModalPortal';
import Modal from './common/modal/Modal';
import postApplication from '../api/postApplication';

interface EventContainerProps {
  shopId: string;
  noticeId: string;
  emptyProfile: boolean;
  children: ReactElement;
}

function EmployerEventContainer({
  shopId,
  noticeId,
  emptyProfile,
  children,
}: EventContainerProps) {
  const router = useRouter();
  const [addProfileModalOpen, setAddProfileModalOpen] = useState(false);

  const handleModal = (value: boolean) => {
    setAddProfileModalOpen(value);
  };

  const handleClick = async () => {
    if (emptyProfile) {
      setAddProfileModalOpen(true);
      return;
    }
    await postApplication(shopId, noticeId);

    router.push(`/shops/${shopId}/notices/${noticeId}/edit`);
  };

  return (
    <div onClick={handleClick}>
      {children}
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

export default EmployerEventContainer;
