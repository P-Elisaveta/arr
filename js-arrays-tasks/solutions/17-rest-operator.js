// BEGIN
export const getMax = (array) => {
    if (array.length == 0) return null;
    let max = array[0];
    for (let i of array) {
        if (i >= max) {
            max = i;
        }
    }
    return max;
}
// END