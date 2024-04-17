/**
 *
 * @todo Date 객체 써서 수정해보기
 */

export default function formatDateAndTime(
  dateString: string,
  workhour: number,
) {
  const startHours = dateString.slice(11, 13);
  const minutes = dateString.slice(14, 16);
  let endHours = String(+startHours + +workhour);

  if (+endHours >= 24) {
    endHours = `익일  ${String(+endHours - 24).padStart(2, '0')}`;
  }

  return `${dateString.slice(0, 10)} ${startHours}:${minutes} ~ ${endHours}:${minutes} (${workhour}시간)`;
}
