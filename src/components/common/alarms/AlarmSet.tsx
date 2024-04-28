import getCookies from '@/src/lib/getCookies';
import AlarmContainer from './AlarmContainer';

export default function AlarmSet() {
  const { userId, token, userType } = getCookies();

  return <AlarmContainer userId={userId} token={token} userType={userType} />;
}
