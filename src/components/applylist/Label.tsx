/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import classNames from 'classnames';
import Image from 'next/image';
import close from '@/public/icons/labelClose.svg';
import styles from './Label.module.scss';

interface LabelProps {
  labelType: string;
  content: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
interface StatusLabelType {
  [status: string]: string;
}

const statusLabel: StatusLabelType = {
  accepted: '승인 완료',
  rejected: '거절',
  pending: '대기중',
};

function Label({ labelType, content, onClick = () => {} }: LabelProps) {
  return labelType === 'location' ? (
    <div className={classNames(styles.label, styles.labelLocation)}>
      {content}
      <span onClick={onClick}>
        <Image
          src={close}
          width={16}
          height={16}
          alt='close'
          className={styles.close}
        />
      </span>
    </div>
  ) : (
    <div
      className={classNames(styles.label, {
        [styles.labelAccept]: statusLabel[content] === '승인 완료',
        [styles.labelReject]: statusLabel[content] === '거절',
        [styles.labelWaiting]: statusLabel[content] === '대기중',
      })}
    >
      {statusLabel[content]}
    </div>
  );
}

export default Label;
