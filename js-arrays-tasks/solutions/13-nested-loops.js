const _ = require("lodash"); 

// BEGIN
const getSameCount = (firstArray, secondArray) => {
    let setArray = new Set(_.intersection(firstArray, secondArray));
    let newArray = Array.from(setArray)
    return newArray.length;
}
export default getSameCount;
// END