import getCookie from '@/src/lib/getCookie';
import AlarmIcon from './AlarmIcon';

export default function AlarmSet() {
  const { userId, token } = getCookie();

  return <AlarmIcon userId={userId} token={token} />;
}
