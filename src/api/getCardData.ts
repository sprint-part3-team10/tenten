import convertToRFC3339 from '../lib/convertToRFC3339';
import { CardItems, Filter } from '../types/types';
import { BASE_URL } from './api';

export interface CardData {
  count: number;
  items: CardItems[];
}

const getCardData = async (
  offset: number,
  limit: number,
  sort?: string,
  filterItems?: Filter,
  keyword?: string,
): Promise<CardData> => {
  const addressListURLQuery = filterItems?.address
    .map(item => `&address=${item}`)
    .join('');

  const hourlyPayGteQuery = filterItems?.hourlyPayGte
    ? `&hourlyPayGte=${filterItems.hourlyPayGte}`
    : '';

  const startsAtGteQuery = filterItems?.startsAtGte
    ? `&startsAtGte=${convertToRFC3339(filterItems.startsAtGte)}`
    : '';

  const sortQuery = sort ? `&sort=${sort}` : '';

  const keywordQuery = keyword ? `&keyword=${keyword}` : '';

  const res = await fetch(
    `${BASE_URL}/notices?offset=${offset}&limit=${limit}${startsAtGteQuery}${hourlyPayGteQuery}${addressListURLQuery}${sortQuery}${keywordQuery}`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('공고를 조회할 수 없습니다. (getCardData)');
  }
  const result = await res.json();

  return { count: result.count, items: result.items };
};

export default getCardData;
