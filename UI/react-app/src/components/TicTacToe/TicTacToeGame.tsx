import React from 'react';
import Dropdown, { DropdownOption } from '../../common/Dropdown/Dropdown';

import TTTBoard from './TicTacToeBoard';

import './TicTacToeGame.scss'

  interface ITTTGameProps {
  
  }
  
  interface ITTTHistory {
    squares: string[];
  }
  
  interface ITTTGameState {
    history: ITTTHistory[];
    xIsNext: boolean;
    stepNumber: number;
  }
  
  class TTTGame extends React.Component<ITTTGameProps, ITTTGameState> {
  
    historyDropdown: boolean = false;
  
    constructor(props: ITTTGameProps) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
  
    handleClick(i: number) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
  
      if (this.historyDropdown) {
        this.toggleHistoryDropdown();
      }
    }
  
    jumpTo(step: number) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
  
      if (this.historyDropdown) {
        this.toggleHistoryDropdown();
      }
    }
  
    newGame() {
      this.setState({
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      });
  
      if (this.historyDropdown) {
        this.toggleHistoryDropdown();
      }
    }
  
    toggleHistoryDropdown() {
      this.historyDropdown = !this.historyDropdown;
  
      this.forceUpdate();
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
  
      const moves: DropdownOption[] = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return {
          desc: desc,
          value: move,
          selected: () => this.jumpTo(move)
        };
      });
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div className='tic-tac-toe-container'>
          <label>Tic Tac Toe</label>
          <div className="game">
                <div className="game-board">
                    <TTTBoard
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
        
                    <button onClick={() => this.newGame()}>New Game</button>
                    
                    <Dropdown 
                        trigger={<button onClick={() => this.toggleHistoryDropdown()}>History</button>}
                        options={moves} openDropdown={this.historyDropdown}/>
                </div>
            </div>
        </div>
        
      );
    }
  }

  export default TTTGame;
  
  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  