'use client';

import { ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from './common/modal/Modal';
import ModalPortal from './common/modal/ModalPortal';
import putAlarmStatus from '../api/putAlarmStatus';
import Spinner from './Spinner';
import styles from './CancelApplyEventContainer.module.scss';

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
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleModal = (value: boolean) => {
    setCancelModalOpen(value);
  };

  const handleClick = async () => {
    setCancelModalOpen(true);
  };

  const handleCancelApplication = async (e: Event) => {
    e.stopPropagation();
    try {
      setIsLoading(true);
      handleModal(false);
      await putAlarmStatus(shopId, noticeId, applicationId, 'canceled', token);
      router.refresh();
    } catch {}
  };

  return (
    <>
      <div onClick={handleClick}>
        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          children
        )}
      </div>
      {cancelModalOpen && (
        <ModalPortal>
          <Modal
            icon='check'
            buttonText={['취소하기', '아니오']}
            handleModal={handleModal}
            handleButton={[
              handleCancelApplication,
              e => {
                e.stopPropagation();
                handleModal(false);
              },
            ]}
            buttonColorChange
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
