// BEGIN (write your solution here)
export const getWeekends = (size) => {
    switch (size) {
        case 'long':
            return ['saturday', 'sunday'];
        case 'short':
            return ['sat', 'sun'];
        default:
            return ['saturday', 'sunday'];
    }
}
// END
