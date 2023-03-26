// BEGIN
const makeCensored = (str, array) => {
    let result = [];
    for (let i of str.split(' ')) {
        if (array.indexOf(i) != -1) {
            result.push('$#%!');} 
        else {
            result.push(i);}
    }
    return result.join(' ');
}
export default makeCensored;
// END