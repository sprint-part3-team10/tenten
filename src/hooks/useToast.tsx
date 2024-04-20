import { useState, useEffect } from 'react';

export default function (duration = 3000) {
  const [showToast, setShowToast] = useState(false);
  const [timerId, setTimerId] = useState(null);

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
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return { showToast, displayToast };
}
