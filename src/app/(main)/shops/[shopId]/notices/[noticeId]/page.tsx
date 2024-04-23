import Card from '@/src/components/Card';
import JobDescription from '@/src/components/store/JobDescription';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import getNoticeData from '@/src/api/getNoticeData';
import getShopApply from '@/src/api/getShopApply';
import styles from './page.module.scss';

// 샘플 api주소 https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b
// 샘플 url http://localhost:3000/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b

interface NoticePageProps {
  params: {
    [param: string]: string;
  };
}

async function NoticePage({ params }: NoticePageProps) {
  const { shopId, noticeId } = params;

  const { item: notice } = await getNoticeData(shopId, noticeId);
  const { count, items } = await getShopApply(
    '8d5c848a-e250-401c-837d-20d89d79680f',
    '750f3a60-1677-4a6e-84d7-2df15ccb9b05',
  );
  console.log(count, items);

  const {
    shop: { item: shop },
  } = notice;
  const infoData = {
    kind: 'notice' as const,
    mainText: notice.hourlyPay,
    startsAt: notice.startsAt,
    workhour: notice.workhour,
    description: shop.description,
    imageUrl: shop.imageUrl,
    address1: shop.address1,
    originalHourlyPay: shop.originalHourlyPay,
    hourlyPay: notice.hourlyPay,
    closed: notice.closed,
  };
  const cardData = {
    closed: notice.closed,
    hourlyPay: notice.hourlyPay,
    item_id: notice.id,
    shop_id: shop.id,
    address1: shop.address1,
    imageUrl: shop.imageUrl,
    name: shop.name,
    startsAt: notice.startsAt,
    workhour: notice.workhour,
  };

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.category}>식당</h2>
        <h1 className={styles.sectionTitle}>{shop.name}</h1>
        <ShopNoticeInfoBox data={infoData} />
        <div style={{ marginBottom: '2.4rem' }} />
        <JobDescription description={notice.description} />
      </section>
      <section>
        <h1 className={styles.sectionTitle}>최근에 본 공고</h1>
        <div className={styles.recentCards}>
          <Card data={cardData} />
          <Card data={cardData} />
          <Card data={cardData} />
          <Card data={cardData} />
          <Card data={cardData} />
          <Card data={cardData} />
        </div>
      </section>
    </>
  );
}

export default NoticePage;
