export default function getTimeDifference(targetDate: string) {
  const target = new Date(targetDate).getTime();
  const now = new Date().getTime();
  const differenceMs = target - now;

  return differenceMs < 0;
}
