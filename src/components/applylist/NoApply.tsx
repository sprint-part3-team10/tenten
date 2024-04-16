import styles from './NoApply.module.scss';

function NoApply({ description }: { description: string }) {
  return (
    <div className={styles.box}>
      <p className={styles.description}>{description}</p>
      <button>공고 보러가기</button>
    </div>
  );
}

export default NoApply;
