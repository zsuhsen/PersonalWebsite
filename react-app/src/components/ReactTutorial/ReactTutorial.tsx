import React from 'react';
import TTTGame from '../TicTacToe/TicTacToeGame';

import './ReactTutorial.css';

class ReactTutorial extends React.Component {
  render(): React.ReactNode {
    return (
      <div className='container'>
        <h2>Tutorials</h2>
        <TTTGame />
      </div>
    );
  }
}

export default ReactTutorial; 

