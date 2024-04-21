const BASE_URL = 'https://bootcamp-api.codeit.kr/api/0-1/the-julge';

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

const getNoticeData = async (
  shopId: string,
  noticeId: string,
): Promise<Notice> => {
  const res = await fetch(`${BASE_URL}/shops/${shopId}/notices/${noticeId}`);
  return res.json();
};

export default getNoticeData;
