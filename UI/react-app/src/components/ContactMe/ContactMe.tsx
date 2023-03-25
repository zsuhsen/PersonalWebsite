import React from 'react';
import { ComponentBase, ComponentBaseProps } from '../../providers/ComponentProvider';

import './ContactMe.scss';
import FlyIn from '../../common/FlyIn/FlyIn';

interface ContactMeProps extends ComponentBaseProps {

}

class ContactMe extends ComponentBase<ContactMeProps> {

    showFlyIn: boolean = false;

  constructor(props: ContactMeProps) {
    super(props);
    
    this.init();
  }

  init(): void {
    
  }

  toggleShow(): void {
    this.showFlyIn = !this.showFlyIn;
    this.forceUpdate();
  }

  render(): React.ReactNode {
    return (
      <div className='container'>
        <h2 onClick={ this.toggleShow.bind(this) }>Contact Me!</h2>
        <FlyIn open={this.showFlyIn} width='50%' close={ this.toggleShow.bind(this) }>
            Content
        </FlyIn>
      </div>
    );
  }
}

export default ContactMe; 
