import { useState, useEffect } from 'react';

export default function useToast(duration = 3000) {
  const [showToast, setShowToast] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

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

  return { showToast, toastMessage, setToastMessage, displayToast };
}
