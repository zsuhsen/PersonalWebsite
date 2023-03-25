import React, { Fragment } from 'react';
import { FiXSquare } from 'react-icons/fi';

import './Overlay.scss';

export interface OverlayProps {
    isOpen: boolean,
    onClose: () => void,
    children: any
}

export function Overlay(props: OverlayProps) {
    return (
      <Fragment>
        {props.isOpen && (
            <div className="overlay">
                <div className="overlay-background" onClick={props.onClose} />
                <div className="overlay-container">
                    <span className='exit-overlay' onClick={props.onClose}><FiXSquare /></span>
                    {props.children}
                </div>
            </div>
        )}
      </Fragment>
    );
  }
  
  export default Overlay;