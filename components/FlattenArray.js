const FlattenArray = () => {
  // Flatten Array - More efficient way to handle events.
  //               - Instead of adding an event listener to EVERY element
  //               - we add an event listener to the parent...

  let arr = [
    [0, 2, 4],
    [6, 8, 10],
    [12, [14, 18], 20],
    [77, 230],
  ];

  // Option 1:
  // let flattened = [].concat(...arr);
  // console.log(flattened);

  // Option 2:
  // 2 indicates how many levels we'd like to flatten.
  // console.log(arr.flat(2));

  // Option 3:
  // Make a custom function to flatten.
  function customFlatten(arr, depth = 1) {
    let result = [];
    arr.forEach((ar) => {
      if (Array.isArray(ar) && depth > 0) {
        // We're using the ...(spread operator) because the ar that's passed in is an array and will have multiple values sent in.
        result.push(...customFlatten(ar, depth - 1));
      } else return result.push(ar);
    });
    return result;
  }

  // Log above function to console, indicate 2 levels of depth.
  console.log(customFlatten(arr, 2));
  return <></>;
};

export default FlattenArray;
