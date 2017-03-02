import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRandomGrid,  startPlaying, tick  } from '../actions/';

import Button from '../components/button';

class Control extends Component {
  
  Play(){
      setInterval(this.props.tick,100);
      this.props.startPlaying();
  }

  render(){
    return (
      <div className="controls">
        <div className="buttons">
          <Button
            handleClick={() => this.props.random()}
            title={'Randomise'}
          />
          <div className="button-group">
            <Button
              handleClick={() => this.Play()}
              title={'Start'}
            />
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({playState}) => {
  return { playState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(makeRandomGrid()),
    startPlaying: () => dispatch(startPlaying()),
    tick: () => dispatch(tick())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Control)
