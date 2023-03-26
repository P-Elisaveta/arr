const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (locations, point) => {
  if (locations.length == 0) return null;
  let dist = 999999999;
  let resCoord;
  let resLoc = '';
  for (let i of locations) {
      let [name, coordinate] = i;
      if (getDistance(coordinate, point) <= dist) {
          dist = getDistance(coordinate, point);
          resCoord = coordinate;
          resLoc = name;
      }
  }
  return [resLoc, resCoord]
}
// END
