export function getTimeDifference(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const differenceMs = target - now;

  return differenceMs < 0;
}

export function getFromTime(createdAt: string) {
  const today = new Date();
  const created = new Date(createdAt);

  const minutes = (today.getTime() - created.getTime()) / 1000 / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const months = days / 30;

  if (minutes < 2) return `1분 전`;
  if (minutes <= 59) return `${Math.floor(minutes)}분 전`;
  if (hours <= 23) return `${Math.floor(hours)}시간 전`;
  if (days <= 30) return `${Math.floor(days)}일 전`;
  if (months <= 11) return `${Math.floor(months)}달 전`;
  if (months >= 12) return `${Math.floor(months / 12)}년 전`;
}
