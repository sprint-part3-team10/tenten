import JobDescription from '@/src/components/store/JobDescription';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import getNoticeData from '@/src/api/getNoticeData';
import RecentViews from '@/src/components/RecentViews';
import Button from '@/src/components/common/Button';
// import { cookies } from 'next/headers';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getShopApply from '@/src/api/getShopApply';
import getTimeDifference from '@/src/lib/caculate';
import EmployerEventContainer from '@/src/components/EmployerEventContainer';
import { cookies } from 'next/headers';
import getProfileData from '@/src/api/getProfileData';
import getUserApply from '@/src/api/getUserApply';
import ApplyEventContainer from '@/src/components/ApplyEventContainer';
import CancelApplyEventContainer from '@/src/components/CancelApplyEventContainer';
import styles from './page.module.scss';

// 샘플 api주소 https://bootcamp-api.codeit.kr/api/0-1/the-julge/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b
// 샘플 url http://localhost:3000/shops/4490151c-5217-4157-b072-9c37b05bed47/notices/99996477-82db-4bda-aae1-4044f11d9a8b

interface NoticePageProps {
  params: {
    [param: string]: string;
  };
}

async function NoticePage({ params }: NoticePageProps) {
  // const userType = cookies().get('userType');
  const userId = cookies().get('u_id');
  const token = cookies().get('token');
  const userType = { value: 'employee' };

  const { shopId, noticeId } = params;

  const { item: notice } = await getNoticeData(shopId, noticeId);
  const {
    shop: { item: shop },
  } = notice;
  const { count } = await getShopApply(shopId, noticeId, 0);

  let emptyProfile = true;
  let applied = null;
  if (userId) {
    const { name } = await getProfileData(userId.value);
    emptyProfile = !name;

    const { items: applications } = await getUserApply(
      userId.value,
      0,
      token.value,
      50,
    );
    applied = applications.find(
      application =>
        application.item.status === 'pending' &&
        application.item.notice.item.id === noticeId,
    );
  }
  // console.log(applied);

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
    originalHourlyPay: shop.originalHourlyPay,
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

  const EXPIRED = getTimeDifference(notice.startsAt);

  return (
    <>
      <section className={styles.outer}>
        <div className={styles.container}>
          <h2 className={styles.category}>식당</h2>
          <h1 className={styles.sectionTitle}>{shop.name}</h1>
          <ShopNoticeInfoBox data={infoData}>
            <>
              {userType?.value === 'employer' && (
                <EmployerEventContainer shopId={shopId} noticeId={noticeId}>
                  <Button buttonType='button' text='공고 편집하기' isWhite />
                </EmployerEventContainer>
              )}
              {userType?.value === 'employee' &&
                (EXPIRED || infoData.closed) && (
                  <Button buttonType='button' text='신청 불가' isDisable />
                )}
              {userType?.value === 'employee' &&
                !(EXPIRED || infoData.closed) &&
                !applied && (
                  <ApplyEventContainer
                    shopId={shopId}
                    noticeId={noticeId}
                    emptyProfile={emptyProfile}
                    token={token.value}
                  >
                    <Button buttonType='button' text='신청하기' />
                  </ApplyEventContainer>
                )}
              {userType?.value === 'employee' &&
                !(EXPIRED || infoData.closed) &&
                applied && (
                  <CancelApplyEventContainer
                    shopId={shopId}
                    noticeId={noticeId}
                    applicationId={applied.item.id}
                  >
                    <Button buttonType='button' text='취소하기' isWhite />
                  </CancelApplyEventContainer>
                )}
            </>
          </ShopNoticeInfoBox>
          <div style={{ marginBottom: '2.4rem' }} />
          <JobDescription description={notice.description} />
        </div>
      </section>
      {userType?.value === 'employer' ? (
        <div className={styles.tableArea}>
          <div className={styles.title}>신청자 목록</div>
          {count ? (
            <ApplyTable
              noticeId={noticeId}
              shopId={shopId}
              userType={userType?.value}
            />
          ) : (
            <div className={styles.noApply}>신청자가 없습니다.</div>
          )}
        </div>
      ) : (
        <RecentViews cardData={cardData} />
      )}
    </>
  );
}

export default NoticePage;
