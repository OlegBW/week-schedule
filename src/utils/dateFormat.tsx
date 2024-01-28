function zfill(val: number, len: number) {
  const value = val.toString();

  if (value.length > len) {
    throw new Error('Wrong arguments');
  }

  const zeroAmount = len - value.length;
  return '0'.repeat(zeroAmount).concat(value);
}

export function getDateString() {
  const date = new Date();

  const year = date.getFullYear();
  const month = zfill(date.getMonth() + 1, 2);
  const day = zfill(date.getDate(), 2);

  const hours = zfill(date.getHours(), 2);
  const minutes = zfill(date.getMinutes(), 2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
