/**
 * Created by vadim on 06.02.2017.
 */
import * as grid from '../bin/grid';

const GRID_HEIGHT = 40;
const GRID_WIDTH = 80;
const initialGrid = grid.makeGrid(GRID_HEIGHT, GRID_WIDTH);

export default (state = initialGrid, action) => {
  switch (action.type) {
    default:
      return state;
  }
};