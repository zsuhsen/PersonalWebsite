import React from 'react';

import TTTSquare from './TicTacToeSquare';

interface IBoardProps {
    squares: string[];
    onClick: (i: number) => void;
  }
  
  interface IBoardState {
    squares: string[];
    xIsNext: boolean;
  }
  
  /// React.Component<PropsObj, StateObj>
  /// Props are the input/output values for the component
  /// State is the scope variable for the template to read
  class TTTBoard extends React.Component<IBoardProps, IBoardState> {
  
    constructor(props: any) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true
      };
    }
  
    renderSquare(i: any) {
      return <TTTSquare 
        value={this.props.squares[i]} 
        onClick={() => this.props.onClick(i)} />;
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default TTTBoard;