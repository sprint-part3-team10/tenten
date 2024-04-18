const formatWage = (wage: number) => {
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
};

export default formatWage;
