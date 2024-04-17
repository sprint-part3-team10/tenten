import styles from './JobDescription.module.scss';

function JobDescription() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>공고 설명</h2>
      <br />
      <p>
        기존 알바 친구가 그만둬서 새로운 친구를 구했는데, 그 사이에 하루가
        비네요. 급해서 시급도 높였고 그렇게 바쁜 날이 아니라서 괜찮을거예요.
      </p>
    </div>
  );
}

export default JobDescription;
