import ApplyTable from '@/components/applyList/ApplyTable';
import NoApply from '@/components/applyList/NoApply';

function mypage() {
  const applyNum = 1;
  return applyNum ? (
    <ApplyTable />
  ) : (
    <NoApply description={'아직 신청 내역이 없어요.'} />
  );
}

export default mypage;
