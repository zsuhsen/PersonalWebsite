import React from 'react';

import './Dropdown.scss';

export interface DropdownOption {
  desc: string;
  value: any;
  selected: (value: any) => void;
}

interface DropdownProps {
  openDropdown: boolean;
  options: DropdownOption[];
  trigger: any; // html for triggering the dropdown
}

interface DropdownState {

}

class Dropdown extends React.Component<DropdownProps, DropdownState> {

    render() {
        const htmlOptions = this.props.options.map((option, i) => {
            return (
              <li className="menu-item" key={i} onClick={() => option.selected(option.value)}>
                {option.desc}
              </li>
            );
          });

        return (
            <div className="dropdown">
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