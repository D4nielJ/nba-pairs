const findPairs = (list, param) => {
  let result = [];
  for (let i = 0; i < list.length; i += 1) {
    for (let j = i + 1; j < list.length; j += 1) {
      if (
        parseInt(list[i].h_in, 10) + parseInt(list[j].h_in, 10) === parseInt(param, 10)
      ) {
        result = [...result, [list[i], list[j]]];
      }
    }
  }
  return result;
};

export default findPairs;
