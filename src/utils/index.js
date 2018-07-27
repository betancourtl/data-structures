export const defaultEquals = (a, b) => a === b;

export const toStrFn = (k) => {
  if (k === null) return 'NULL';
  else if (k === undefined) return 'UNDEFINED';
  else if (typeof k === 'string' || k instanceof String) return k;
  return k.toString();
};
