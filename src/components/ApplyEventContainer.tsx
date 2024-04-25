'use client';

import { ReactElement } from 'react';
import { useRouter } from 'next/navigation';
import postApplication from '../api/postApplication';

interface EventContainerProps {
  shopId: string;
  noticeId: string;
  children: ReactElement;
  userType: string | undefined;
}

function ApplyEventContainer({
  shopId,
  noticeId,
  children,
  userType,
}: EventContainerProps) {
  const router = useRouter();
  const handleClick = async () => {
    if (userType === 'employee') {
      await postApplication(shopId, noticeId);
    } else if (userType === 'employer') {
      router.push(`/shops/${shopId}/notices/${noticeId}/edit`);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default ApplyEventContainer;
