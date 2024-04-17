const formatWage = (wage: number) => {
  let wageString = String(wage);

  wageString = wageString
    .split('')
    .reverse()
    .reduce((acc: string[], e: string, i) => {
      if (i && (i + 1) % 3 === 0) return [...acc, e, ','];
      return [...acc, e];
    }, [])
    .reverse()
    .join('');

  wageString += '원';

  return wageString;
};

export default formatWage;
