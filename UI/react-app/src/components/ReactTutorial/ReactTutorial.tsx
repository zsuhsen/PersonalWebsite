import React from 'react';
import { ComponentBase, ComponentBaseProps } from '../../providers/ComponentProvider';
import TTTGame from '../TicTacToe/TicTacToeGame';

import './ReactTutorial.scss';

interface ReactTutorialProps extends ComponentBaseProps {

}

class ReactTutorial extends ComponentBase<ReactTutorialProps> {

  constructor(props: ReactTutorialProps) {
    super(props);
    
    this.init();
  }

  init(): void {
    
  }

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

