/**
 * Created by vadim on 06.02.2017.
 */
import {combineReducers} from 'redux';

import boardReducer from './reducers_board';
import playStatusReducer from './reducer_play_status';

const rootReducer = combineReducers({
  board: boardReducer,
  playState: playStatusReducer
});

export default rootReducer;