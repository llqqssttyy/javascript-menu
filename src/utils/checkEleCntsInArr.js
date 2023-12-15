const checkEleCntsInArr = (arr, element, cnt) => {
  const counts = arr.filter((e) => e === element).length;
  return counts === cnt;
};

export default checkEleCntsInArr;
