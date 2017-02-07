/**
 * Created by vadim on 07.02.2017.
 */
const initialState = {
  isRunning: false
};

export default (state = initialState, action) => {
  switch(action.type){
    case 'PLAY':
      return {
        isRunning: true
      };
    
    default:
      return state;
  }
};
