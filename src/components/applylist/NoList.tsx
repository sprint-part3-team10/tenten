import styles from './NoList.module.scss';

function NoList({
  description,
  // buttonAction,
}: {
  description: string;
  // buttonAction: string;
}) {
  return (
    <div className={styles.box}>
      <p className={styles.description}>{description}</p>
      {/* <button className={styles.button}>{buttonAction}</button> */}
    </div>
  );
}

export default NoList;
