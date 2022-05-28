function getCommon(arr1, ...args) {
  try {
    let multidimintionalArrs = [arr1, ...args]; // Concatenate arrays
    return multidimintionalArrs.reduce((p, c) =>
      p.filter((e) => c.includes(e))
    );
  } catch (err) {
    console.log("getCommon Error", err);
  }
}

module.exports = getCommon;
