'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';

interface EventContainerProps {
  noticeId: string;
  children: ReactElement;
}

function EmployerEventContainer({ noticeId, children }: EventContainerProps) {
  const router = useRouter();
  const handleClick = async () => {
    router.push(`/myshop/register/notice?noticeId=${noticeId}`);
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default EmployerEventContainer;
