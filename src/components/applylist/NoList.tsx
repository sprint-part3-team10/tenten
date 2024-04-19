import styles from './NoList.module.scss';

interface NoListProps {
  description: string;
  // buttonAction: string;
}
function NoList({
  description,
  // buttonAction,
}: NoListProps) {
  return (
    <div className={styles.box}>
      <p className={styles.description}>{description}</p>
      {/* <button className={styles.button}>{buttonAction}</button> */}
    </div>
  );
}

export default NoList;
