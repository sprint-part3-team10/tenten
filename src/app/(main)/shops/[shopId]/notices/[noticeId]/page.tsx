import Card from '@/src/components/Card';
import JobDescription from '@/src/components/store/JobDescription';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import styles from './page.module.scss';

// 샘플 api주소 https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b
// 샘플 url http://localhost:3000/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b
const mock = {
  item: {
    id: '99996477-82db-4bda-aae1-4044f11d9a8b',
    hourlyPay: 30000,
    startsAt: '2023-07-07T18:00:00.000Z',
    workhour: 2,
    description: '도와주세요',
    closed: false,
    shop: {
      item: {
        id: '4490151c-5217-4157-b072-9c37b05bed47',
        name: '진주회관',
        category: '한식',
        address1: '서울시 중구',
        address2: '세종대로11길 26',
        description: '콩국수 맛집 인정따리',
        imageUrl:
          'https://bootcamp-project-api.s3.ap-northeast-2.amazonaws.com/0-1/the-julge/1bdb43c8-ff08-4a46-81b0-7f91efced98c-jinju4.png',
        originalHourlyPay: 10000,
      },
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
    },
    currentUserApplication: null,
  },
  links: [
    {
      rel: 'self',
      description: '공고 정보',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b',
    },
    {
      rel: 'update',
      description: '공고 수정',
      method: 'PUT',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b',
      body: {
        hourlyPay: 'number',
        startsAt: 'string',
        workhour: 'string',
        description: 'string',
      },
    },
    {
      rel: 'applications',
      description: '지원 목록',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b/applications',
      query: {
        offset: 'undefined | number',
        limit: 'undefined | number',
      },
    },
    {
      rel: 'create',
      description: '지원하기',
      method: 'POST',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b/applications',
    },
    {
      rel: 'shop',
      description: '가게 정보',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47',
    },
    {
      rel: 'list',
      description: '공고 목록',
      method: 'GET',
      href: '/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices',
      query: {
        offset: 'undefined | number',
        limit: 'undefined | number',
      },
    },
  ],
};

const BASE_URL = 'https://bootcamp-api.codeit.kr/api/0-1/the-julge';

interface NoticePageProps {
  params: {
    [param: string]: string;
  };
}

interface Notice {
  item: {
    id: string;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: boolean;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
    currentUserApplication: null;
  };
}

const getData = async (shopId: string, noticeId: string): Promise<Notice> => {
  const res = await fetch(`${BASE_URL}/shops/${shopId}/notices/${noticeId}`);
  return res.json();
};

async function NoticePage({ params }: NoticePageProps) {
  const { shopId, noticeId } = params;

  const { item: notice } = await getData(shopId, noticeId);
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
