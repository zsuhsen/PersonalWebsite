import React from 'react';

import './Dropdown.scss';

export interface IDropdownOption {
    desc: string;
    value: any;
    selected: (value: any) => void;
}

interface IDropdownProps {
    openDropdown: boolean;
    options: IDropdownOption[];
    trigger: any; // html for triggering the dropdown
}

interface IDropdownState {

}

class Dropdown extends React.Component<IDropdownProps, IDropdownState> {

    render() {
        const htmlOptions = this.props.options.map((option, i) => {
            return (
              <li className="menu-item" key={i} onClick={() => option.selected(option.value)}>
                {option.desc}
              </li>
            );
          });

        return (
            <div className='dropdown'>
                {this.props.trigger}
                {
                this.props.openDropdown ? (
                    <ul className="menu">{htmlOptions}</ul>
                    ) : null
                }
            </div>
            
        );
    }
}

export default Dropdown; 