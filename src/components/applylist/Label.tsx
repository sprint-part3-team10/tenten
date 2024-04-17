import classNames from 'classnames';
import Image from 'next/image';
import styles from './Label.module.scss';
import close from '@/public/icons/labelClose.svg';

function Label({ labelType, content }: { labelType: string; content: string }) {
  return labelType === 'location' ? (
    <div className={classNames(styles.label, styles.labelLocation)}>
      {content}
      <Image
        src={close}
        width={16}
        height={16}
        alt='close'
        className={styles.close}
      />
    </div>
  ) : (
    <div
      className={classNames(styles.label, {
        [styles.labelAccept]: content === 'accepted',
        [styles.labelReject]: content === 'rejected',
        [styles.labelWaiting]: content === 'pending',
      })}
    >
      {content}
    </div>
  );
}

export default Label;
