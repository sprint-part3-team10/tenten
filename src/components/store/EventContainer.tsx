'use client';

import { useRouter } from 'next/navigation';
import { ReactElement } from 'react';

interface EventContainerProps {
  path: string;
  children: ReactElement;
}

function EventContainer({ path, children }: EventContainerProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default EventContainer;
