import React, { Fragment } from 'react';
import { FiXSquare } from 'react-icons/fi';

import './FlyIn.scss';

export interface FlyinProps {
    open: boolean,
    width: string,
    close: () => void,
    children: any
}

const FlyIn = (props: FlyinProps) => {
    return (
      <div>
        {props.open && (
            <div className='side-nav' style={{width: props.width}}>
                <div className=''>
                    <span className='' onClick={props.close}><FiXSquare /></span>
                    {props.children}
                </div>
            </div>
        )}
      </div>
    );
  }
  
  export default FlyIn;