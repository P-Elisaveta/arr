// BEGIN
const getSameParity = (array) => {
    let newArray = [];
    for (let i of array) {
        if (Math.abs(i % 2) === Math.abs(array[0]) % 2) {
            newArray.push(i);
        }
    }
    return newArray;
}
export default getSameParity;
// END