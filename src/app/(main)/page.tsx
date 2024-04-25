import CardList from '@/src/components/card/CardList';
import CustomCardList from '@/src/components/card/CustomCardList';
import classNames from 'classnames';
import { cookies } from 'next/headers';
import styles from './page.module.scss';

export default function Home() {
  const userType = cookies().get('userType')?.value;
  return (
    <div>
      {userType === 'employee' && <CustomCardList />}
      <div
        className={classNames({
          [styles.noCustom]: userType === 'employer' || userType === undefined,
        })}
      >
        <CardList />
      </div>
    </div>
  );
}
