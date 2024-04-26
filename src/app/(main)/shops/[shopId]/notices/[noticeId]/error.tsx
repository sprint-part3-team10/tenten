'use client';

// Error components must be Client Components

import { useEffect } from 'react';
import ModalPortal from '@/src/components/common/modal/ModalPortal';
import Modal from '@/src/components/common/modal/Modal';
import { useRouter } from 'next/navigation';
import styles from './error.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.outer}>
      <Modal
        buttonText={['다시 시도', '홈으로']}
        handleButton={[() => reset(), () => router.push('/')]}
        handleModal={() => {}}
        maxWidth='50rem'
        message={error.message}
        minWidth='30rem'
        icon='warning'
      />
    </div>
  );
}
