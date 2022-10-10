const ForEachVsMap = ({ title, description }) => {
  // Array of data
  let myArraysA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let myArraysB = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();

  // EXAMPLE 1
  console.log("FOR EACH");
  myArraysA.forEach((arr) => {
    console.log(arr);
  });

  console.log("MAP");
  myArraysB.map((arr) => {
    console.log(arr);
  });

  // EXAMPLE 2
  // FOREACH
  const returnValA = myArraysA.forEach((el) => {
    return el * el;
  });
  // For Each ONLY returns undefined.
  // Which means we can not method chain.
  console.log(returnValA);

  // MAP
  const returnValB = myArraysA
    .map((el) => {
      return el * el;
    })
    .filter((num) => num > 30);
  console.log(returnValB);

  return <></>;
};

export default ForEachVsMap;
