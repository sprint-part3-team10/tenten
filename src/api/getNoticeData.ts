import { BASE_URL } from './api';

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
  const res = await fetch(`${BASE_URL}/shops/${shopId}/notices/${noticeId}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    let errorMessage = '';
    switch (res.status) {
      case 404:
        errorMessage = '가게나 공고가 존재하지 않습니다';
        break;
      default:
        errorMessage = `${res.status} ${res.statusText}`;
        break;
    }
    throw new Error(errorMessage);
  }

  const result = await res.json();

  return result;
};

export default getNoticeData;
