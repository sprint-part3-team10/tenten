'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';

interface EventContainerProps {
  shopId: string;
  noticeId: string;
  children: ReactElement;
}

function EmployerEventContainer({
  shopId,
  noticeId,
  children,
}: EventContainerProps) {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/shops/${shopId}/notices/${noticeId}/edit`);
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default EmployerEventContainer;
