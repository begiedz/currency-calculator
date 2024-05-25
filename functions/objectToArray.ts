function objectToArray(obj: object) {
  return Object.entries(obj).map(([key, value]) => {
    return { [key]: value };
  });
}
export default objectToArray;
