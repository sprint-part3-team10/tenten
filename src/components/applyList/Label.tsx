'use client';

import classNames from 'classnames';
import Image from 'next/image';
import close from '@/public/icons/labelClose.svg';
import styles from './Label.module.scss';

interface LabelProps {
  labelType: string;
  content: string;
  onClick?: () => void;
}
interface StatusLabelType {
  [status: string]: string;
}

const statusLabel: StatusLabelType = {
  accepted: '승인 완료',
  rejected: '거절',
  pending: '대기중',
  canceled: '취소',
};

function Label({ labelType, content, onClick }: LabelProps) {
  return labelType === 'location' ? (
    <div className={classNames(styles.label, styles.labelLocation)}>
      {content}
      <span onClick={onClick}>
        <Image
          src={close}
          width={16}
          height={16}
          alt='delete'
          className={styles.delete}
        />
      </span>
    </div>
  ) : (
    <div
      className={classNames(styles.label, {
        [styles.labelAccept]: statusLabel[content] === '승인 완료',
        [styles.labelReject]: statusLabel[content] === '거절',
        [styles.labelWaiting]: statusLabel[content] === '대기중',
        [styles.labelCancel]: statusLabel[content] === '취소',
      })}
    >
      {statusLabel[content]}
    </div>
  );
}

export default Label;
