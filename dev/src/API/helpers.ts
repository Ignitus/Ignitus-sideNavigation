export const deepUpdateObject = <T>(originalObject: T, nestedKeys: string[], updatedValue): T => {
  const outputObject = { ...originalObject };
  let iterator = outputObject;
  let i: number;
  let iBound: number;

  for (i = 0, iBound = nestedKeys.length; i < iBound - 1; i += 1) {
    iterator = iterator[nestedKeys[i]];
  }
  iterator[nestedKeys[i]] = updatedValue;
  return outputObject;
};
