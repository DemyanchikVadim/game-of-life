import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cell from '../components/Cell';

class Board extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
          {this.props.board.map((row,i) =>
            <tr key={i}> {row.map((cell,j) =>
              <Cell
                key={j}
              />)}
            </tr> )}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({board}) => {
  return {board};
};

export default connect(mapStateToProps)(Board);
