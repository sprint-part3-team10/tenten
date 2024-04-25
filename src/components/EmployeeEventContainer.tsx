'use client';

import { ReactElement } from 'react';
import postApplication from '../api/postApplication';

interface EventContainerProps {
  shopId: string;
  noticeId: string;
  children: ReactElement;
}

function EmployeeEventContainer({
  shopId,
  noticeId,
  children,
}: EventContainerProps) {
  const handleClick = async () => {
    await postApplication(shopId, noticeId);
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default EmployeeEventContainer;
