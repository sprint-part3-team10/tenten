import ApplyTable from '@/components/applylist/ApplyTable';
import NoApply from '@/components/applylist/NoApply';

function mypage() {
  const applyNum = 0;
  return applyNum ? (
    <ApplyTable />
  ) : (
    <NoApply description={'아직 신청 내역이 없어요.'} />
  );
}

export default mypage;
