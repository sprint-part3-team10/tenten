'use client';

import { ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './common/modal/Modal';
import ModalPortal from './common/modal/ModalPortal';
import putAlarmStatus from '../api/putAlarmStatus';

interface CancelApplyEventContainerProps {
  shopId: string;
  noticeId: string;
  applicationId: string;
  token?: string;
  children: ReactElement;
}

function CancelApplyEventContainer({
  shopId,
  noticeId,
  applicationId,
  token = '',
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

  const handleCancelApplication = async (e: Event) => {
    e.stopPropagation();
    await putAlarmStatus(shopId, noticeId, applicationId, 'canceled', token);
    handleModal(false);
    router.refresh();
  };

  return (
    <>
      <div onClick={handleClick}>{children}</div>
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
    </>
  );
}
export default CancelApplyEventContainer;
