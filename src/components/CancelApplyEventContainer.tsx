'use client';

import { MouseEvent, ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './common/modal/Modal';
import ModalPortal from './common/modal/ModalPortal';
import putApplication from '../api/putApplication';

interface CancelApplyEventContainerProps {
  shopId: string;
  noticeId: string;
  applicationId: string;
  children: ReactElement;
}

function CancelApplyEventContainer({
  shopId,
  noticeId,
  applicationId,
  children,
}: CancelApplyEventContainerProps) {
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const router = useRouter();

  const handleModal = (value: boolean) => {
    setCancelModalOpen(value);
  };

  const handleClick = async () => {
    setCancelModalOpen(true);
  };

  const handleCancelApplication = async e => {
    e.stopPropagation();
    const res = await putApplication(shopId, noticeId, applicationId);
    console.log(res);
    handleModal(false);
    router.refresh();
  };

  return (
    <div onClick={handleClick}>
      {children}
      {cancelModalOpen && (
        <ModalPortal>
          <Modal
            icon='check'
            buttonText={['아니오', '취소하기']}
            handleModal={handleModal}
            handleButton={[
              e => {
                e.stopPropagation();
                handleModal(false);
              },
              handleCancelApplication,
            ]}
            maxWidth='40rem'
            message='신청을 취소하시겠어요?'
            minWidth='20rem'
          />
        </ModalPortal>
      )}
    </div>
  );
}
export default CancelApplyEventContainer;
