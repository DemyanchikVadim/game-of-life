/**
 * Created by vadim on 06.02.2017.
 */
import {combineReducers} from 'redux';

import boardReducer from './reducers_board';

const rootReducer = combineReducers({
  board: boardReducer
});

export default rootReducer;
