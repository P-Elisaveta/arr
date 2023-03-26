// BEGIN
const getSuperSeriesWinner = (scores) => {
    let canada = 0;
    let ussr = 0;

    for (let i of scores) {
        let c = i[0]
        let u = i[1]
        if (c > u) {
            canada += 1;
        }
        else if (c < u) {
            ussr += 1;
        }
    }
    if (canada > ussr) {
        return 'canada';
    } else if (canada < ussr) {
        return 'ussr';
    } else {
        return null;
    }
}
export default getSuperSeriesWinner;
// END