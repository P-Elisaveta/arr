// BEGIN
const calculateAverage = (array) => {
    if (array.length == 0) {
        return null;
    }
    let summ = 0;
    let k = 0;
    for (let i of array) {
        summ += i;
        k += 1;
    }
    return summ / k;
}
export default calculateAverage;
// END