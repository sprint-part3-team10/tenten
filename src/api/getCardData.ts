import convertToRFC3339 from '../lib/convertToRFC3339';
import { CardItems, Filter } from '../types/types';
import { BASE_URL } from './api';

export interface CardData {
  count: number;
  items: CardItems['items'];
}

const getCardData = async (
  offset: number,
  limit: number,
  filterItems?: Filter,
): Promise<CardData> => {
  const addressList = filterItems?.address
    .map(item => `&address=${item}`)
    .join('');

  const filterUrl = filterItems
    ? `&hourlyPayGte=${filterItems?.hourlyPayGte}${addressList}&startsAtGte=${filterItems?.startsAtGte && convertToRFC3339(filterItems?.startsAtGte)}`
    : '';

  const res = await fetch(
    `${BASE_URL}/notices?offset=${offset}&limit=${limit}${filterUrl}`,
    { cache: 'no-store' },
  );

  if (!res.ok) {
    throw new Error('공고를 조회할 수 없습니다.');
  }
  const result = await res.json();

  return { count: result.count, items: result.items };
};

export default getCardData;
