// BEGIN
const addPrefix = (array, prefix) => {
    let newArray = [];
    for (let i of array) {
        let a = prefix + ' ' + i;
        newArray.push(a);
    }
    return newArray;
}
export default addPrefix;
// END