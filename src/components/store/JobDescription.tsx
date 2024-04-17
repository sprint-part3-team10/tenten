import styles from './JobDescription.module.scss';

interface Props {
  description: string;
}

function JobDescription({ description }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>공고 설명</h2>
      <br />
      <p>{description}</p>
    </div>
  );
}

export default JobDescription;
