// BEGIN
const countUniqChars = (string) => {
    let setArray = new Set(string.split(''));
    let newArray = Array.from(setArray);
    return newArray.length;
}
export default countUniqChars;
// END