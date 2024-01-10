export const getArrayOfTascs = (objectOfTascsFromStorage) => {
  const arrayOfTascsFromStorage = Object.values(objectOfTascsFromStorage);
  return arrayOfTascsFromStorage.slice(0, arrayOfTascsFromStorage.length - 1);
};
