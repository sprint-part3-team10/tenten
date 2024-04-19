import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';

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

const NoticePage = ({ params }: NoticePageProps) => {
  const { shopId, noticeId } = params;

  const fetchNotice = async (shopId: string, noticeId: string) => {
    const res = await fetch(`${BASE_URL}/shops/${shopId}/notices/${noticeId}`);
    const data = await res.json();
    console.log(data);
  };

  fetchNotice(shopId, noticeId);

  return (
    <ShopNoticeInfoBox
      address1={mock.item.shop.item.address1}
      description={mock.item.description}
      imageUrl={mock.item.shop.item.imageUrl}
      kind='notice'
      mainText={mock.item.hourlyPay}
      startsAt={mock.item.startsAt}
      workhour={mock.item.workhour}
    />
  );
};

export default NoticePage;
