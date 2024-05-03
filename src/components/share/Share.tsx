'use client';

import Image from 'next/image';
import shareIcon from '@/public/icons/share.svg';
import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FacebookShareButton } from 'react-share';
import styles from './Share.module.scss';
import Toast from '../common/toast/Toast';

declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareProps {
  title: string;
  description: string;
  imageUrl: string;
}

function Share({ title, description, imageUrl }: ShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const handleKakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
    });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SHARE);

    return () => {
      window.Kakao.cleanup();
    };
  }, []);

  return (
    <>
      <div className={styles.button} onClick={handleClick}>
        <Image src={shareIcon} alt='공유하기' width={20} height={20} />
        {isOpen && (
          <ul className={styles.list}>
            <CopyToClipboard
              text={window.location.href}
              onCopy={() => {
                setToast(true);
                setTimeout(() => {
                  setToast(false);
                }, 1700);
              }}
            >
              <li>URL 복사</li>
            </CopyToClipboard>
            <li onClick={handleKakaoShare}>카카오톡</li>
            <li>
              <FacebookShareButton url={window.location.href}>
                페이스북
              </FacebookShareButton>
            </li>
          </ul>
        )}
      </div>
      {toast && <Toast message='URL이 복사되었습니다.' />}
    </>
  );
}

export default Share;
