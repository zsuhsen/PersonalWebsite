import React from 'react';

interface ISquareProps {
    value: string,
    onClick: () => void
  }
  
  /// Function component example
  function TTTSquare(props: ISquareProps) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default TTTSquare;