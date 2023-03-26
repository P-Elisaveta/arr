// BEGIN
const getTotalAmount = (array, cur) => {
    let result = 0;
    for (let i of array) {
        if (i.split(' ')[0] == cur) {
        result += +i.split(' ')[1];
        }
    }
    return result;
}
export default getTotalAmount;
// END