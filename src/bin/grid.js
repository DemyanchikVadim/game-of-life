/**
 * Created by vadim on 06.02.2017.
 */
export const makeGrid = (height, width, makeRandom = false) => {
  let grid = [];
  for (var i = 0; i < height; i++) {
    var row = [];
    for (var j = 0; j < width; j++) {
      let value;
      if (makeRandom) {
        value = Math.random() > 0.85;
      }
      row.push({
        status: value,
      });
    }
    grid.push(row);
  }
  return grid;
};

