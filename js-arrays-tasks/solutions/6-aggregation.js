// BEGIN
export const calculateSum = (array) => {
    let summ = 0;
    for (let i of array) {
        if (i % 3 == 0) {
            summ += i;
        }
    }
    return summ;
}
// END