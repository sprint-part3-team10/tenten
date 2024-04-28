import { useState, useEffect } from 'react';

export default function useToast(duration = 1500) {
  const [showToast, setShowToast] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<any>(null);
  const [toastMessage, setToastMessage] = useState<string>('');

  const displayToast = () => {
    setShowToast(true);
    if (timerId) {
      clearTimeout(timerId);
    }
    // 새로운 타이머 설정
    const id = setTimeout(() => {
      setShowToast(false);
    }, duration);
    setTimerId(id);
  };

  useEffect(() => {
    if (toastMessage) {
      displayToast();
    }
  }, [toastMessage]);

  useEffect(
    () => () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    },
    [timerId],
  );

  return { showToast, toastMessage, setToastMessage };
}
