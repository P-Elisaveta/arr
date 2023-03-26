// BEGIN
export const swap = (array) => {
    let a = array[0];
    let b = array[array.length - 1];
    if (array.length > 2) {  
        let c = array.slice(1, array.length-1);
        return [b, ...c, a];
    } else if (array.length == 2) {
        return [b, a];
    } else {
        return array;
    }
};
// END