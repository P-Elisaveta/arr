// BEGIN
const buildDefinitionList = (arr) => {
    if (arr.length == 0 || arr[0].length == 0) {
        return '';
    }
    let string = '<dl>';
    for (let i of arr) {
        string += `<dt>${i[0]}</dt><dd>${i[1]}</dd>`
    }
    string += '</dl>'
    return string;
}
export default buildDefinitionList;
// END