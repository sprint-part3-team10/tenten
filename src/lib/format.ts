export function formatDateAndTime(dateString: string, workhour: number) {
  const startHours = dateString.slice(11, 13);
  const minutes = dateString.slice(14, 16);
  let endHours = String(+startHours + +workhour);

  if (+endHours >= 24) {
    endHours = `익일  ${String(+endHours - 24).padStart(2, '0')}`;
  }

  return `${dateString.slice(0, 10)} ${startHours}:${minutes} ~ ${endHours}:${minutes} (${workhour}시간)`;
}

export function formatWage(wage: number) {
  let wageString = String(wage);

  wageString = wageString
    .split('')
    .reverse()
    .reduce((acc: string[], e: string, i, self) => {
      if ((i + 1) % 3 === 0 && self[i + 1]) return [...acc, e, ','];
      return [...acc, e];
    }, [])
    .reverse()
    .join('');

  wageString += '원';

  return wageString;
}
