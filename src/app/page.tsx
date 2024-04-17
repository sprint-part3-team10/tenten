import Card from '../components/Card';
import styles from './page.module.scss';

export default function Home() {
  const mockData = {
    id: '1234',
    name: '해피 버거',
    startsAt: '2023-07-07T18:00:00.000Z',
    workhour: 10,
    address1: '서울시 은평구',
    hourlyPay: 30000,
    imageUrl: '/images/cherry.png',
    closed: true,
  };
  const mockData2 = {
    id: '1234',
    name: '해피 버거',
    startsAt: '2023-07-07T18:00:00.000Z',
    workhour: 10,
    address1: '서울시 은평구',
    hourlyPay: 30000,
    imageUrl: '/images/cherry.png',
    closed: false,
  };

  return (
    <div className={styles.test}>
      <Card data={mockData2} />
      <Card data={mockData} />
    </div>
  );
}
