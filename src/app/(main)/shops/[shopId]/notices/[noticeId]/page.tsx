import JobDescription from '@/src/components/store/JobDescription';
import ShopNoticeInfoBox from '@/src/components/store/ShopNoticeInfoBox';
import getNoticeData from '@/src/api/getNoticeData';
import RecentViews from '@/src/components/RecentViews';
import Button from '@/src/components/common/Button';
import ApplyTable from '@/src/components/applyList/ApplyTable';
import getShopApply from '@/src/api/getShopApply';
import { getTimeDifference } from '@/src/lib/caculate';
import EmployerEventContainer from '@/src/components/EmployerEventContainer';
import getProfileData from '@/src/api/getProfileData';
import getUserApply from '@/src/api/getUserApply';
import ApplyEventContainer from '@/src/components/ApplyEventContainer';
import CancelApplyEventContainer from '@/src/components/CancelApplyEventContainer';
import getCookies from '@/src/lib/getCookies';
import styles from './page.module.scss';

interface NoticePageProps {
  params: {
    [param: string]: string;
  };
}

async function NoticePage({ params }: NoticePageProps) {
  const { userId, token, userType, shopId: cookieShopId } = getCookies();

  const { shopId, noticeId } = params;

  const OWNER = cookieShopId === shopId;

  const { item: notice } = await getNoticeData(shopId, noticeId);
  const {
    shop: { item: shop },
  } = notice;

  let applyNum = 0;
  if (token) {
    const { count } = await getShopApply(shopId, noticeId, 0, token);
    applyNum = count;
  }

  let emptyProfile = true;
  let applied = null;
  if (userId && token) {
    const { name } = await getProfileData(userId);
    emptyProfile = !name;

    const { items: applications } = await getUserApply(userId, 0, token, 50);
    applied = applications.find(
      application =>
        application.item.status === 'pending' &&
        application.item.notice.item.id === noticeId,
    );
  }

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
              {userType === 'employer' && OWNER && (
                <EmployerEventContainer noticeId={noticeId}>
                  <Button
                    buttonType='button'
                    text='공고 편집하기'
                    isWhite
                    isDisable={infoData.closed}
                  />
                </EmployerEventContainer>
              )}
              {((userType === 'employer' && !OWNER) ||
                (userType !== 'employer' && (EXPIRED || infoData.closed))) && (
                <Button buttonType='button' text='신청 불가' isDisable />
              )}
              {userType !== 'employer' &&
                !(EXPIRED || infoData.closed) &&
                !applied && (
                  <ApplyEventContainer
                    shopId={shopId}
                    noticeId={noticeId}
                    emptyProfile={emptyProfile}
                    token={token}
                  >
                    <Button buttonType='button' text='신청하기' />
                  </ApplyEventContainer>
                )}
              {userType === 'employee' &&
                !(EXPIRED || infoData.closed) &&
                applied && (
                  <CancelApplyEventContainer
                    shopId={shopId}
                    noticeId={noticeId}
                    applicationId={applied.item.id}
                    token={token}
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
      {userType === 'employer' && OWNER ? (
        <div className={styles.tableArea}>
          <div className={styles.title}>신청자 목록</div>
          {applyNum ? (
            <ApplyTable
              noticeId={noticeId}
              shopId={shopId}
              userType={userType}
              token={token}
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
