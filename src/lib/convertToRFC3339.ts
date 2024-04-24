export default function convertToRFC3339(
  dateObject: Date,
  initNextDayTime: boolean = true,
) {
  const now = new Date();
  const isNextDaySelected = dateObject.toDateString() !== now.toDateString();
  const initTime = '00:00:00Z';
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');

  if (isNextDaySelected && initNextDayTime)
    return `${year}-${month}-${day}T${initTime}`;

  const hours = String(dateObject.getHours()).padStart(2, '0');
  const minutes = String(dateObject.getMinutes()).padStart(2, '0');
  const seconds = String(dateObject.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}
