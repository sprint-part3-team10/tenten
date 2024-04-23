export default function convertToRFC3339(koreanDateTimeStr: string) {
  const formattedStr = koreanDateTimeStr.replace(/년|월|일|오전|오후/g, '');
  const targetDate = new Date(formattedStr);

  if (koreanDateTimeStr.includes('오후')) {
    targetDate.setHours(targetDate.getHours() + 12);
  }

  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, '0');
  const day = String(targetDate.getDate()).padStart(2, '0');
  const hours = String(targetDate.getHours()).padStart(2, '0');
  const minutes = String(targetDate.getMinutes()).padStart(2, '0');
  const seconds = String(targetDate.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}
