'use client';

import { useEffect } from 'react';
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
        message={`name: ${error.name} \n\rmessage: ${error.message} \n\rdigest: ${error.digest} \n\rcause:${error.cause} \n\rstack:${error.stack}`}
        minWidth='30rem'
        icon='warning'
      />
    </div>
  );
}
