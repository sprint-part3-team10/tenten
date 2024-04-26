import getCookie from '@/src/lib/getCookies';
import AlarmIcon from './AlarmIcon';

export default function AlarmSet() {
  const { userId, token, userType } = getCookie();

  return <AlarmIcon userId={userId} token={token} userType={userType} />;
}
