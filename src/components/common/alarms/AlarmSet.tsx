import getCookies from '@/src/lib/getCookies';
import AlarmContainer from './AlarmContainer';

export default function AlarmSet() {
  const { userId, token, userType } = getCookies();

  return (
    userId &&
    token &&
    userType && (
      <AlarmContainer userId={userId} token={token} userType={userType} />
    )
  );
}
