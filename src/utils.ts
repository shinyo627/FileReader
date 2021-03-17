export const dateStringToDate = (dateString: string): Date => {
  //   28/10/2018
  const dateParts = dateString
    .split('/') // ['28', '10', '2018']
    .map((value: string): number => parseInt(value));

  return new Date(dateParts[2], dateParts[1], dateParts[0]);
};
